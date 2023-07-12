import APIMock, { SingleEntityAPIMock, unstableDelay } from "./api-mock";

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const userStorage = new APIMock<User>("users", [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "JohnDoe123!"
    }
]);
const authenticatedUserStorage = new SingleEntityAPIMock<User>("authenticatedUser");

export const login = async (email: string, password: string): Promise<User> => {
    await unstableDelay(1000);

    if (authenticatedUserStorage.get() !== null) {
        throw new Error("Already logged in.");
    }

    const user = userStorage.findAll().find(user => user.email === email && user.password === password);
    if (user === undefined) {
        throw new Error("Invalid email or password.");
    }

    authenticatedUserStorage.set(user);

    return user;
}

const validateUserPayload = (user: Omit<User, 'id'>): void => {
    if (user.firstName.trim() === "") {
        throw new Error("First name cannot be empty.");
    }

    if (user.lastName.trim() === "") {
        throw new Error("Last name cannot be empty.");
    }

    if (user.email.trim() === "") {
        throw new Error("Email cannot be empty.");
    }

    if (user.password.trim() === "") {
        throw new Error("Password cannot be empty.");
    }

    if (user.password.length < 8) {
        throw new Error("Password must be at least 8 characters long.");
    }

    if (user.password.length > 32) {
        throw new Error("Password cannot be longer than 32 characters.");
    }
}

export const register = async (user: Omit<User, 'id'>): Promise<User> => {
    await unstableDelay(1000);

    if (authenticatedUserStorage.get() !== null) {
        throw new Error("Cannot register while logged in.");
    }

    validateUserPayload(user);

    const users = userStorage.findAll();

    const isEmailUsed = users.find(existingUser => existingUser.email === user.email) !== undefined;
    if (isEmailUsed) {
        throw new Error("Email is already used.");
    }

    const id = users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;
    const newUser = { ...user, id };
    userStorage.saveAll([...users, newUser]);

    return newUser;
}

export const logout = async (): Promise<void> => {
    await unstableDelay(1000);

    authenticatedUserStorage.set(null);
}
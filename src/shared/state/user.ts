import { createContext } from "react";
import { User } from "../services/user.service";

const UserContext = createContext<User | null>(null);

export default UserContext;
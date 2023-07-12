import { ReactNode } from "react";
import Navigation from "../../shared/components/nav/Navigation";
import { User } from "../../shared/services/user.service";
import ProfileInformation from "./components/ProfileInformation";

const ProfilePage = (): ReactNode => {
    const user: User | null = null // FIXME: Get the user from the global state.

    if (user === null) {
        // FIXME: This page should be visible only for authenticated users. All others should be redirected to the login page.
        return <></>
    }

    return <>
        <Navigation />
        This is the profile page.
        <p>This page should be visible only for authenticated users.</p>

        <p>Here is the user's information:</p>
        <ProfileInformation user={user} />
    </>
}

export default ProfilePage
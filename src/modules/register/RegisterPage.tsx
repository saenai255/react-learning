import { ReactNode } from "react";
import Navigation from "../../shared/components/nav/Navigation";

const RegisterPage = (): ReactNode => {

    return <>
        <Navigation />
        This is the register page.
        <p>This page should be visible only for unauthenticated users.</p>
    </>
}

export default RegisterPage
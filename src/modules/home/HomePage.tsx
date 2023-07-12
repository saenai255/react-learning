import { ReactNode } from "react";
import Navigation from "../../shared/components/nav/Navigation";

const HomePage = (): ReactNode => {

    return <>
        <Navigation />
        This is the home page.
        <p>This page should be visible for everyone.</p>
    </>
}

export default HomePage
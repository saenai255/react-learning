import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

type GetClassForActiveLinkArgs = {
    isActive: boolean
    isPending: boolean
}
const getClassForActiveLink = ({ isActive }: GetClassForActiveLinkArgs): string => {
    if (isActive) {
        return 'link-active'
    }

    return ''
}

const Navigation = (): ReactNode => {
    // FIXME: Only show routes that are available for the current user.
    return <ul>
        <li><NavLink to='/' className={getClassForActiveLink}>Home</NavLink></li>
        <li><NavLink to='/login' className={getClassForActiveLink}>Login</NavLink></li>
        <li><NavLink to='/register' className={getClassForActiveLink}>Register</NavLink></li>
        <li><NavLink to='/profile' className={getClassForActiveLink}>Profile</NavLink></li>
    </ul>
}

export default Navigation
import { ReactNode } from "react"
import { User } from "../../../shared/services/user.service"

export type ProfileInformationProps = {
    user: User
}

const ProfileInformation = ({ user }: ProfileInformationProps): ReactNode => {
    return <div>
        <h1>Profile Information</h1>
        <p>Name: {user.firstName} {user.lastName}</p>
        <p>Email: {user.email}</p>
    </div>
}

export default ProfileInformation
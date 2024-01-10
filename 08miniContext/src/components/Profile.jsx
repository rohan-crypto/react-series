// here we can understand to access data using UserContextProvider
import {useContext} from 'react'
import UserContext from '../user/UserContext'

const Profile = () => {

    // this {user} was created in UserContextProvider, so we are using it to get/access data
    const {user} = useContext(UserContext);

    if(!user)  return <div>Please login</div>

    return (
        <div>
            Welcome {user.username}
        </div>
    )
}

export default Profile

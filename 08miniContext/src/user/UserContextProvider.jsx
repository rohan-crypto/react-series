import React, { useState } from "react";
import UserContext from "./UserContext";

// it is a function which provides variables or props to child components
const UserContextProvider = ({children}) => {

    // we can take value from user and set some value by passing value in setUser
    const [user, setUser] = useState(null);

    return(
        //this fragment provides values in object to its children which are other components
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;
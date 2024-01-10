// step 1 is to create and use UserContext
// step 2 is to create and use UserContextProvider which will serve as a global or parent 
// fragment and will enclose child components like card, div,etc. and will pass props to them
// which any of them can use. 
// This is called state management.

import React from "react";

const UserContext = React.createContext();

export default UserContext;
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./user/UserContextProvider"


function App() {

  return (
    <UserContextProvider>
      <h1>React with Redux</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

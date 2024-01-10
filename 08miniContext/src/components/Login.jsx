// here we can understand to send data using UserContextProvider
import {useState, useContext} from 'react'
import UserContext from '../user/UserContext'


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // this setUser was created in UserContextProvider, so we are using it to pass/send data
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='username' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {" "}
      <input type="password" placeholder='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
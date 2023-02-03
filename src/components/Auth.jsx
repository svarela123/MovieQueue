import {useState, useContext} from 'react'
import axios from 'axios'
import AuthContext from '../store/AuthContext'

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [register, setRegister] = useState(false)
  const authCtx = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()

    const body = {
      username,
      password
    }

    
    axios.post(register ? '/api/register' : '/api/login', body)
    // .then(res => console.log(res.data))
    .then(res => authCtx.login(res.data.token, res.data.exp, res.data.userId))
    // .catch(err => console.log(err.response.data))
    .catch(err => console.log(err))
  }

  // console.log(authCtx)
  return (
    <div>
      {register ? (
        <form onSubmit={e => handleSubmit(e)}>
          <h2>Welcome to MovieQueue! Please sign up below.</h2>
          <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
          <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
          <button>Submit</button>

        </form>
      ) : (
        <form onSubmit={e => handleSubmit(e)}>
          <h2>Welcome to MovieQueue! Please login below.</h2>
          <input placeholder='username' onChange={e => setUsername(e.target.value)}/>
          <input placeholder='password' onChange={e => setPassword(e.target.value)}/>
          <button>Submit</button>

        </form>
      )}
      <button onClick={() => setRegister(!register)}>Need to {register ? 'login?' : 'register?'}</button>
    </div>
  )
}

export default Auth
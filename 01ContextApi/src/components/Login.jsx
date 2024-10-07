import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = React.useContext(UserContext)


    const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username,password})
    }
  
    return (
    <form className='flex flex-col bg-blue-500 justify-center align-center  items-center w-1/4 h-fit gap-5 rounded-lg ml-96 mt-10'>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button  className="bg-blue-800 rounded-lg px-3 py-1" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Login

// import React, {useState, useContext} from 'react'
// import UserContext from '../context/UserContext'

// function Login() {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const {setUser} = useContext(UserContext)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setUser({username, password})
//     }
//   return (
//     <div>
//         <h2>Login</h2>
//         <input type='text'
//         value={username}
//         onChange={(e) => setUsername(e.target.value) }
//         placeholder='username'  />
//         {" "}
//         <input type='text' 
//         value={password}
//         onChange={(e) => setPassword(e.target.value) }
//         placeholder='password'  />
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default Login
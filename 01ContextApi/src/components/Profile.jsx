import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
 
    const {user} = useContext(UserContext)

  if(!user) return <div className='center bg-slate-500 w-1/4 h-3/4 mt-3 rounded-lg ml-96'>Please login</div>
  
  return <div className='center bg-slate-500 w-1/4 h-3/4  mt-3 rounded-lg ml-96'>Welcome {user.username}</div>

}

export default Profile



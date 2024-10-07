import React from 'react'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
    <h1 className='text-xl font-bold underline '>React and chai</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}


export default App


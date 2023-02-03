import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../store/AuthContext'
import { useContext } from 'react'

const Header = () => {
  const authCtx = useContext(AuthContext)
  return (
    <nav>
        <NavLink to='/'>Landing</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/frienddetail'>FriendDetail</NavLink>
        <button onClick={authCtx.logout}>Logout</button>
    </nav>
  )
}

export default Header
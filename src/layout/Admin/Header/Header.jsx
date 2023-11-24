import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='admin__header'>
      <h1>Admin Page</h1>
      <ul> 
            <li>
                <Link to= ''>Dashboard</Link>
            </li>
            <li>
                <Link to= 'profile'>Profile</Link>
            </li>
           
        </ul>
    </div>
  )
}

export default Header
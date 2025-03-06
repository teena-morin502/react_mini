import React from 'react';
import { Link,Outlet } from 'react-router-dom';

function NavBar(){
  return (
    <div>
    <nav>
        <Link to ="/home">home</Link>
        <Link to ="/about">about</Link>
        <Link to ="/dashboard">dashboard</Link>
        <Link to ="/settings">settings</Link>
        <Outlet/>
        </nav>
    </div>
  )
}

export default NavBar
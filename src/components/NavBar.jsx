import React from 'react'
import Logo from '../assets/movieLogo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex border space-x-8 item-center pl-3 py-4'>
        <img className="w-[50px]" src={Logo}></img>
        <Link className='text-blue-500 text-3xl font-bold' to="/">Home</Link>
        <Link className='text-blue-500 text-3xl font-bold' to="/watchList">WatchList</Link>
    </div>
  )
}

export default NavBar
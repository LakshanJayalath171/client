import React from 'react'
import {assets} from "../../assets/assets"
import { Link } from 'react-router-dom'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const openSignIn  = useClerk()
  const {user} = useUser()

  const isCourcelistpage = location.pathname.includes('/cource-list')
  return (
    <div className={`navbar flex item-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourcelistpage?"bg-white":"bg-cyan-100/70"}}`}>
        <img src={assets.logo} alt="logo" className='w-28 lg:w-32 cursor-pointer' />

        <div className='hidden md:flex items-center gap-5 text-gray-500 justify-end'>

          <div className='flex items-center justify-between gap-5'>
            <button onClick={()=>openSignIn()}>Become Educator</button>
            <Link to='/my-enrollments'>My Enrollments</Link>
          </div>
          <button className='bg-blue-600 rounded-full text-white px-5 py-2'>Create Account</button>
        </div>
        {/* {for mobile screens} */}
        <div className='md:hidden flex justify-between item-center gap-2 sm:gap-5 text-gray-500'>
          <div>
            <button>Become Educator</button>
            <Link to='/my-enrollments'>My Enrollments</Link>
            <img src={assets.user_icon} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Navbar
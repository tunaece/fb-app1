import './comps.css'
import {auth} from '../config/firebase1'
import {useAuthState} from 'react-firebase-hooks/auth'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import NavMenu from './NavMenu';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
   const [menuState,setMenuState]=useState(false)
   const [user] = useAuthState(auth)
   const navigate=useNavigate()

return (
<div className='sticky top-0'>
<nav className="theNavbar">

   <div className='flex items-center sm:space-x-6'>
      <button className='p-4 sm:ps-5 px-3' 
      onClick={()=>setMenuState(!menuState)}>
      {menuState? <MdClose size={32}/>: <GiHamburgerMenu size={32}/>}
      </button>
   <div className='theLogo cursor-pointer' onClick={()=>navigate('/')}>
   <div className='logoPhoto' onClick={()=>navigate('/')}></div>
      <h1 className='hidden sm:flex cursor-pointer'>ASMOGRAM</h1>
   </div>

   </div>
      
      {user&&
      <div className='flex items-center space-x-3'>
      <p className='my-auto'>{user?.displayName}</p>
      <div>
      <img src={user?.photoURL || ""} 
      width={40} className='rounded-full' />
      </div>
      </div>
      }
</nav>
<AnimatePresence>
{menuState&&<NavMenu menuState={setMenuState} />}
</AnimatePresence>
</div>
)
}

export default Navbar
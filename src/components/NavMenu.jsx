/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import './comps.css'
import {auth} from '../config/firebase1'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'
import {motion} from 'framer-motion'

const NavMenu = ({menuState}) => {
   const [user] = useAuthState(auth)
   const setMenu=()=>{menuState(false)}
   const signUserOut =async()=>{
      await signOut(auth)
      setMenu()
   }
return (
<motion.div className='navRouteLinks'
initial={{x:-400}}
animate={{x:0}}
transition={{duration:0.1,ease:'easeOut'}}
exit={{x:-400}}
>
   <NavLink className='navRouteLink' activeclass='active' 
   to='/' onClick={setMenu} >Ana Sayfa</NavLink>
   
   <NavLink to='/yeni-gonderi' className='navRouteLink'
   onClick={setMenu}>Gönderi Oluştur</NavLink>
<div className="absolute bottom-0 w-full">

      <NavLink className='navRouteLink'
         to='/login' onClick={setMenu}>
         {user? 'Hesap Değiştir' : 'Giriş Yap'}
         </NavLink>
   {user&&
   
      <div className='logout-wrapper' onClick={signUserOut}>
         <button>Çıkış Yap</button>
      </div>
   }
</div>
</motion.div>
)
}

export default NavMenu
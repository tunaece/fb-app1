import './pages.css'
import {auth,provider} from '../config/firebase1' 
import {signInWithPopup} from 'firebase/auth'  
import { useNavigate } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
const Login = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  const signInWithGoogle= async()=>{
    const result = await signInWithPopup(auth,provider)
    console.log(result)
    navigate('/')
  }

return (
<div className='loginWrapper'>
  
  <div className='signCards'>
    <h1 className="loginText">Google hesabı ile giriş</h1>
    <button className="loginButton"
    onClick={signInWithGoogle}>
      {user? 'Hesap Değiştir':'Giriş Yap'}
    </button>
  </div>
  <br />
    <div className='signCards'>
    <h1 className="loginText">Telefon Numarası ile giriş</h1>
    <button className="disabled">
      Mevcut Değil
    </button>
  </div>

</div>
)
}

export default Login
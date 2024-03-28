import { useForm } from 'react-hook-form'
import '../pages.css'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {addDoc,collection} from 'firebase/firestore'
import {auth, db} from '../../config/firebase1'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

const PostForm = () => {
  const navigate=useNavigate()
  const [user] = useAuthState(auth)
  const schema = yup.object().shape({
    title: yup.string().required('Başlık Gereklidir.'),
    description: yup.string().required('Açıklama Gereklidir.')
  })
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })
  const postRef=collection(db,'posts')
  const onCreatePost=async(data)=>{
    await addDoc(postRef,{
      ...data,
      username: user?.displayName,
      pp: user?.photoURL,
      userId: user?.uid
    })
    navigate('/')
  }

  return (
    <form className="postForm" onSubmit={handleSubmit(onCreatePost)}>
      <h1 className='text-2xl'>Yeni Gönderi</h1>
      <input className='form-title' placeholder="Başlık" 
      {...register('title')} />
      <p className='error-message'> {errors.title?.message} </p>
      <textarea className='form-desc' placeholder="Açıklama"
      {...register('description')} />
      <p className='error-message'> {errors.description?.message} </p>
      <input className='formSubmit bg-purple-500' type="submit"  value="Paylaş"/>
    </form>
  )
}

export default PostForm
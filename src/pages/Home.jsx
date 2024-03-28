import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase1"
import { useEffect, useState } from "react"
const Home = () => {
  const postRef=collection(db,'posts')
  const [postList,setPostList]=useState(null)
  const getPosts=async()=>{
    const data = await getDocs(postRef)
    setPostList(data.docs.map((doc)=>({
      ...doc.data(),id:doc.id}))) 
  }
  useEffect(()=>{
    getPosts()
  })

return (
  <div className="flex justify-center">
<div className="posts-wrapper">
  {postList?.map((post,ix)=>{
    return <div key={ix} className="postComp">
      <div className="flex space-x-2 items-center">
        <img src={post.pp} width={40} className="rounded-full" />
        <h2 className="text-xl">{post.username}</h2>
      </div>
      <h1 className="postTitle"> {post.title} </h1>
      <p className="postDesc"> {post.description} </p>
    </div>
  })}
</div>
</div>
)
}

export default Home
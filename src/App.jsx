import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import CreatePost from "./pages/createPost/CreatePost"


function App() {

return (
<div>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/yeni-gonderi' element={<CreatePost/>} />
  </Routes>
</div>
)
}

export default App

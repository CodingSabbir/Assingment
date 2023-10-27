import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import NotMatch from "./NotMatch"
import Information from "./Information"



function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<NotMatch/>}/>
        <Route path="/user/:userInfo" element={<Information/>}/>
      </Routes>
    </>
  )
}

export default App

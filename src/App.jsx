import Add from "./Pages/Add/Add"
import Orders from "./Pages/Orders/Orders"
import List from './Pages/List/List'
import Navbar from "./components/Navbar/Navbar"
import SideBar from "./components/SideBar/SideBar"
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
       <Navbar/>
       <hr/>
       <div className="">
         <SideBar/>
         <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>} />
         </Routes>
       </div>
    </div>
  )
}

export default App


import Navbar from "./components/Navbar/Navbar"
import SideBar from "./components/SideBar/SideBar"


const App = () => {
  return (
    <div>
       <Navbar/>
       <hr/>
       <div className="">
         <SideBar/>
       </div>
    </div>
  )
}

export default App


import Navbar from "./components/Navbar/Navbar"
import SideBar from "./components/SideBar/SideBar"


const App = () => {
  return (
    <div className="px-8 py-2">
       <Navbar/>
       <hr/>
       <div className="flex">
         <SideBar/>
       </div>
    </div>
  )
}

export default App


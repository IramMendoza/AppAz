import { Routes, Route } from "react-router-dom"
import FirstPage from "./views/FirstPage"
import Desktop from "./views/Desktop"
import Movil from "./views/Movil"
import Admin from "./views/Admin"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <FirstPage/> }/>
      <Route path="/desktop" element={ <Desktop/> }/>
      <Route path="/movil" element={ <Movil/> }/>
      <Route path="/admin" element={ <Admin/> }/>
    </Routes>
    </>
  )
}

export default App

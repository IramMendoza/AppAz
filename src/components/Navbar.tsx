import { useDispatch } from "react-redux"
import { changeToMenu } from "../actions"
import { changeToTables } from "../actions"
import Logo from '../assets/Logo menroz.png'
import Menu from '../assets/fast-food-Icon.png'
import TablesIcon from '../assets/tableIconPng.png'

const Navbar = () => {

  const dispatch = useDispatch()

  function handleClickMenu () {
    dispatch( changeToMenu() )
  }

  function handleClickTables () {
    dispatch( changeToTables() )
  }

  return (
    <div className=" bg-gray-900 flex justify-around rounded-b-3xl shadow-2xl fixed top-0 w-screen">

      <img
      className="w-[5%] h-[8%] mt-3" 
      src={Logo}/>

      <img
      className="w-[8%] h-[8%] m-2 mr-1 mt-3 p-1"
      src={Menu}
      onClick={handleClickMenu}/>

      <img
      className=" text-white w-[9%] h-[12%] m-2 mt-3 p-1"
      src={TablesIcon}
      onClick={handleClickTables}/>

    </div>
  )
}

export default Navbar

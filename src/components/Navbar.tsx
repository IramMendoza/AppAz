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
    <div className=" bg-gray-900 flex justify-around fixed top-0 w-screen">

      <img
      className="w-[7%] m-2" 
      src={Logo}/>

      <img
      className="w-[9%] h-[8%] m-2 mt-3"
      src={Menu}
      onClick={handleClickMenu}/>

      <img
      className=" text-white w-[9%] h-[12%] m-2 mt-4"
      src={TablesIcon}
      onClick={handleClickTables}/>

    </div>
  )
}

export default Navbar

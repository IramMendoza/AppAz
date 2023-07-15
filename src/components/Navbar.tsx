import { useDispatch } from "react-redux"
import { changeToMenu } from "../actions"
import { changeToTables } from "../actions"
import Logo from '../assets/Logo menroz.png'
import Menu from '../assets/fast-food-Icon.png'
import TablesIcon from '../assets/tableIconPng.png'
import AddCircle from "../components/AddCircle"

const Navbar = () => {

  const dispatch = useDispatch()

  function handleClickMenu () {
    dispatch( changeToMenu() )
  }

  function handleClickTables () {
    dispatch( changeToTables() )
  }

  return (
    <div className=" relative">
      <div className=" bg-gray-800 flex justify-around xsm:rounded-b-3xl sm:rounded-b-3xl shadow-2xl fixed top-0 w-full pb-2">

        <img
        className="w-[20px] mt-3" 
        src={Logo}/>

        <img
        className="w-[30px] m-2 mr-1 mt-3"
        src={Menu}
        onClick={handleClickMenu}/>

        <img
        className=" text-white w-[35px] mt-3 mb-1"
        src={TablesIcon}
        onClick={handleClickTables}/>

      </div>
      
      <div className=" w-full flex justify-center">
        <AddCircle/>
      </div>
    </div>
  )
}

export default Navbar

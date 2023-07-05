import { useDispatch } from "react-redux"
import { changeToMenu } from "../actions"
import { changeToTables } from "../actions"

const Navbar = () => {

  const dispatch = useDispatch()

  function handleClickMenu () {
    dispatch( changeToMenu() )
  }

  function handleClickTables () {
    dispatch( changeToTables() )
  }

  return (
    <div className=" bg-gray-800 flex justify-around fixed top-0 w-screen">

        <button
        className=" text-white"
        onClick={handleClickMenu}>
          Menu
        </button>

        <button 
        className=" text-white"
        onClick={handleClickTables}>
          Mesas
        </button>
        
    </div>
  )
}

export default Navbar

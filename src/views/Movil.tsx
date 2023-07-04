import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import Cart from "../components/Cart"
import Menu from "../components/Menu"
import Tables from "../components/Tables"

interface AppState { 
  menuTables: string
}

const Movil = () => {

  const menuTables = useSelector<AppState, string>(state => state.menuTables)
  //Utilizo el useSelector para traer el estado de la app y renderizar el componente segun el valor
  //menuTables. Es un condicional sencillo.

  return (
    <div className=" bg-slate-600 w-screen h-screen">
      <Navbar/>
      <div>
        {menuTables === "tables" ? <Tables /> : <Menu />}
      </div>
      <Cart/>
    </div>
  )
}

export default Movil
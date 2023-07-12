import { useSelector } from "react-redux"
import { InitialState, Table } from "../interfaces"
import TableList from "./TableList"

const Tables = () => {
  
  const tables = useSelector<InitialState, Table[]>(state => state.tables)
  const circleState = useSelector<InitialState, boolean>( state => state.circleAdd )
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // La funcion mira con circleState para que cuando este renderice, nos lleve
  // hasta arriba en la pagina y se note si fue o no agregado correctamente
  // la orden a la mesa
  if ( circleState === true ){
    scrollToTop()
  }

  return (
    <div className=" bg-sky-900 w-screen h-screen">
      <div className=" pb-[3rem]"/>
      <div>
        { tables.length === 0 ? 

        <div className=" w-full h-full flex justify-center bg-sky-900">
          <div className=" py-[15rem]">
            <p className=" text-center text-white text-4xl font-bold">NO HAY MESAS AUN ;D</p>
          </div>
        </div> 
        
        : 
        
        <div className="">
          <TableList/>
        </div>

        }
      </div>
    </div>
  )
}

export default Tables

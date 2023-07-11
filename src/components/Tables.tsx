import { useSelector } from "react-redux"
import { InitialState, Table } from "../interfaces"

const Tables = () => {

  const tables = useSelector<InitialState, Table[]>(state => state.tables)

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
        
        <div>
          
        </div>

        }
      </div>
    </div>
  )
}

export default Tables

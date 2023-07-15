import { useSelector } from "react-redux"
import { InitialState, Table } from "../interfaces"
import TableCard from "./TableCard"

const TableList = () => {

    const tables = useSelector<InitialState, Table[]>(state => state.tables)

    return (
        <div>
        {
            tables.map ( (table) => {
                return (
                    <div>
                        <TableCard
                        tableNumber={table.tableNumber}
                        client={table.client}
                        />
                    </div>
                    )
                }
            )
        }
        </div>
    )
}

export default TableList

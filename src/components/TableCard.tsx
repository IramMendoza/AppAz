interface TableProps {
  tableNumber: number
  client: string
}

const TableCard = ({tableNumber, client} : TableProps) => {
  return (
    <div className=" bg-yellow-300 w-[7rem] h-[5rem]">
      <p>{tableNumber}</p>
      <p>{client}</p>
    </div>
  )
}

export default TableCard

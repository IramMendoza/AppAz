interface TableProps {
  tableNumber: number;
  client: string;
}

const TableCard = ({ tableNumber, client }: TableProps) => {
  return (
    <div className="bg-slate-200 rounded-2xl shadow-2xl w-[15rem] px-[3rem] m-3">
      <div className="flex justify-center">
        <p className="text-slate-700 text-center mx-1">Mesa :</p>
        <p className="font-semibold">{tableNumber}</p>
      </div>

      <div className="w-full flex">
        <p className="text-slate-700 w-[50%] text-center mx-1">Cliente:</p>
        <p className="w-[50%] text-center font-semibold">{client}</p>
      </div>

      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-cyan-600 to-sky-600 text-white py-1 px-3 rounded-2xl m-2 mt-1 mb-3">
          Ver
        </button>
      </div>
    </div>
  );
};

export default TableCard;



import { useDispatch } from 'react-redux'
import { deleteProductFromList } from '../actions'
import Cross from '../assets/cross.png'

interface ProductOnList {
    product: string
    price: number
    amount: number
    id: number
}

const ProductOnList = ({product, price, amount, id} : ProductOnList) => {

  const dispatch = useDispatch()

  function handleDelete () {
    dispatch(deleteProductFromList ( product ) )
  }

  return (
    <div
    className=" flex justify-around bg-slate-200 rounded-2xl p-1 m-1 mr-3 ml-3 w-[90%] shadow-2xl" 
    key={id}>
        <p className=" w-[60%] text-sm">{product}</p>
        <p>{price}$</p>
        <p>x{amount}</p>
        <div className=' w-[8%]'>
          <img
          className=' mt-[2px]'
          onClick={handleDelete}
          src={Cross}/>
        </div>
    </div>
  )
}

export default ProductOnList

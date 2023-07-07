import { useDispatch } from 'react-redux'
import { deleteProductFromList } from '../actions'
import { motion } from 'framer-motion'
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
    <motion.div
    className=" flex justify-around bg-slate-200 rounded-2xl h-[2rem] p-1 m-1 mr-3 ml-3 w-[90%] shadow-2xl" 
    key={id}
    initial={{ x : -500 }}
    animate={{ x : 0 }}
    >
        <p className=" w-[60%] text-sm font-medium">{product}</p>

        <p className=' text-slate-700'>{price}$</p>

        <motion.p className=' text-slate-700 font-semibold'
          initial={{ scale : 1 }}
          animate={{ scale : [2,1] }}
          transition={{ duration : 1 }}>
          x{amount}
        </motion.p>

        <div className=' overflow-visible w-[28px]'>
          <img
          onClick={handleDelete}
          src={Cross}/>
        </div>

    </motion.div>
  )
}

export default ProductOnList

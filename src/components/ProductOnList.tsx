import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { deleteProductFromList } from '../actions'
import { motion, useAnimation } from 'framer-motion'
import Cross from '../assets/cross.png'

interface ProductOnList {
    product: string
    price: number
    amount: number
    id: number
}

const ProductOnList = ({product, price, amount} : ProductOnList) => {

  const animate = useAnimation()
  const dispatch = useDispatch()
  const variants = { 
    render : { x : 0 }
  }

  useEffect( () => {
    animate.start('render')
    }
    ,[]
  )

  function handleDelete () {
    dispatch(deleteProductFromList ( product ) )
  }

      // IMPORTANTE:
    // NO HAY QUE DARLES KEY A LOS ELEMENTOS QUE SE VAN RENDERIZANDO
    // YA QUE ESTO HACE QUE SE RENDERICEN CON CADA CAMBIO EN EL CART

  return (
    <motion.div
    className=" flex justify-around bg-slate-200 rounded-3xl h-[2rem] p-1 px-2 mt-2 mb-1 w-[95%] shadow-2xl" 
    
    initial={{ x : -300 }}
    animate={animate}
    variants={variants}
    transition={{ duration : 0.1 }}
    >
        <p className=" w-[60%] text-sm font-medium">{product}</p>

        <p className=' text-slate-700'>{price}$</p>

        <motion.p className=' text-slate-700 font-semibold'
          initial={{ scale : 1 }}
          animate={{ scale : [2,1] }}
          transition={{ duration : 1 }}>
          x{amount}
        </motion.p>

        <div className=' w-[25px]'>
          <img
          onClick={handleDelete}
          src={Cross}/>
        </div>

    </motion.div>
  )
}

export default ProductOnList

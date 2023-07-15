import { motion, useAnimation } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { deleteAllProductsFromList, changeCart } from "../actions"
import { InitialState } from "../interfaces"
import ProductList from "./ProductList"
import IconsCart from "./IconsCart"
import PriceOrder from "./PriceOrder"
import CreateTable from "./CreateTable"
import Pay from "./Pay"

// Puede haber un problema con este componente en el futuro, por algun motivo cambia la posicion sin
// Razon aparente. Parece estar relaciondo con el componente Tables

const Cart = () => {

  const cartState = useSelector<InitialState, String>( state => state.cart )
  const animate = useAnimation()
  const dispatch = useDispatch()
  const variants = {
    open : { y : [-30,0] },
    close : { y : [-30,0] }
  }


  function handleCart () {
    cartState === 'close' ? animate.start('close') : animate.start('open')
    dispatch(changeCart())
    console.log(cartState)
  }

  function handleDeleteAll () {
    dispatch(deleteAllProductsFromList())
  }

  return (

    <motion.div
      className="backdrop-blur-sm bg-white/50 fixed bottom-0 w-screen rounded-t-3xl"
      initial={{ y : 0 }}
      animate={animate}
      variants={variants}
      transition={{ duration : 0.1 }}
    >
      <IconsCart handleCart={ handleCart }/>

        { cartState === 'close' ? <div/> : 

          <div>

            <ProductList/>

            <PriceOrder/>

            <Pay/>

            <CreateTable/>

            <div className="flex justify-center pb-1 pt-1">
              <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-slate-100 p-1 pl-2 pr-2 rounded-3xl" 
                      onClick={handleDeleteAll}>
                Borrar Todo
              </button>
            </div>

        </div>
      }
      
    </motion.div>
  )
}

export default Cart
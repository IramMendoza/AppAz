import { motion, useAnimation } from "framer-motion"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteAllProductsFromList } from "../actions"
import ProductList from "./ProductList"
import IconsCart from "./IconsCart"
import PriceOrder from "./PriceOrder"

const Cart = () => {

  const [cartOn, setCartOn] = useState(false)
  const animate = useAnimation()
  const dispatch = useDispatch()
  const variants = {
    open : { y : [-30,0] },
    close : { y : [-30,0] }
  }

  function handleCart () {
    cartOn === true ? animate.start('close') : animate.start('open')
    cartOn === false ? setCartOn(true) : setCartOn(false)
    console.log(cartOn)
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
      {cartOn === false ? (
        <div/>
      ) : (
        <div>

          <ProductList/>

          <PriceOrder/>

          <div className="flex justify-center pb-1 pt-2">
            <button className="bg-gradient-to-r from-emerald-700 to-lime-700 text-slate-100 p-1 pl-2 pr-2 rounded-3xl">
              Cobrar
            </button>
          </div>

          <div className="flex justify-center pb-1 pt-1">
            <button className="bg-gradient-to-r from-cyan-800 to-sky-700 text-slate-100 p-1 pl-2 pr-2 rounded-3xl">
              Agregar a Mesa
            </button>
          </div>

          <div className="flex justify-center pb-1 pt-1">
            <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-slate-100 p-1 pl-2 pr-2 rounded-3xl" onClick={handleDeleteAll}>
              Borrar Todo
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Cart


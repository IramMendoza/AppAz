import { motion, useAnimation } from "framer-motion"
import { useState } from "react"
import ProductList from "./ProductList"
import IconsCart from "./IconsCart"


const Cart = () => {

  const [cartOn, setCartOn] = useState(false)
  const animate = useAnimation()
  const variants = {
    open : { y : [-30,0] },
    close : { y : [-30,0] }
  }

  function handleCart () {
    cartOn === true ? animate.start('close') : animate.start('open')
    cartOn === false ? setCartOn(true) : setCartOn(false)
    console.log(cartOn)
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
      {
        cartOn === false ? <div/> :
        <div>
          <ProductList/>
          <div className=" flex justify-center pb-3 pt-3">
            <button className=" bg-gradient-to-r from-cyan-900 to-sky-700 text-slate-100 p-1 pl-2 pr-2 rounded-3xl">
            Borrar Todo
            </button>
          </div>
        </div>
      }
    </motion.div>
  )
}

export default Cart

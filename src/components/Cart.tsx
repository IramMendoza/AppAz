import { motion } from "framer-motion"
import { useState } from "react"
import ProductList from "./ProductList"
import IconsCart from "./IconsCart"


const Cart = () => {

  const [cartOn, setCartOn] = useState(false)

  function handleCart () {
    cartOn === false ? setCartOn(true) : setCartOn(false)
    console.log(cartOn)
  }

  return (
    <motion.div
    className="backdrop-blur-sm bg-white/30 fixed bottom-0 w-screen rounded-t-3xl">
      <IconsCart handleCart={ handleCart }/>
      {
        cartOn === false ? <div/> :
        <div>
          <ProductList/>
        </div>
      }
    </motion.div>
  )
}

export default Cart

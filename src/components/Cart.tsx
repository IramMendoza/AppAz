import { motion } from "framer-motion"
import ProductList from "./ProductList"

const Cart = () => {

  

  return (
    <motion.div className="backdrop-blur-sm bg-white/30 fixed bottom-0 w-screen rounded-t-3xl">
      <p>VACIO</p>
      <ProductList/>
    </motion.div>
  )
}

export default Cart

import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import { InitialState, Product } from "../interfaces"
import Burger from '../assets/burger.png'
import Beer from '../assets/beer.png'
import Fries from '../assets/french-fries.png'

interface Props {
    handleCart: () => void
}

const IconsCart = ({ handleCart} : Props) => {

    const productList = useSelector<InitialState, Product[]>(state => state.productList)

    return (
    <div 
    className="w-full flex justify-center"
    onClick={handleCart}>
            {
                productList.length === 0 ? <p className=" text-center font-medium text-lg mt-2 mb-2 p-1">Vacio</p> :

                    <div className=" flex justify-center overflow-x-auto w-[85%]">
                        {
                            productList.map( (product => {
                                return (
                                    <motion.div 
                                    className=" w-[40px] m-2"
                                    initial={{ scale : 1 }}
                                    animate={{ scale : [1,1.5,1] }}
                                    transition={{ duration : 0.2 }}
                                    >
                                        {product.type === 'burger' ? <img src={Burger} /> : <div />}
                                        {product.type === 'beer' ? <img src={Beer} /> : <div />}
                                        {product.type === 'complement' ? <img src={Fries} /> : <div />}
                                    </motion.div>
                                )
                            }
                            )
                            )
                        }
                    </div>
            }
    </div>
  )
}

export default IconsCart

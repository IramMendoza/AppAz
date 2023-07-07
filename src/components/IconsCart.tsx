import { useSelector } from "react-redux"
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
                productList.length === 0 ? <p className=" text-center mt-2 mb-2">Vacio</p> :

                    <div className=" flex justify-center overflow-x-auto w-[85%]">
                        {
                            productList.map( (product => {
                                return (
                                    <div className=" w-[10%] m-2">
                                        {product.type === 'burger' ? <img src={Burger} /> : <div />}
                                        {product.type === 'beer' ? <img src={Beer} /> : <div />}
                                        {product.type === 'complement' ? <img src={Fries} /> : <div />}
                                    </div>
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

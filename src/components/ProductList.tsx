import { useSelector } from "react-redux"
import { InitialState } from "../interfaces"

const ProductList = () => {

    const productList = useSelector<InitialState>(state => state.productList)

    return (
        <div>
        </div>
    )
}

export default ProductList

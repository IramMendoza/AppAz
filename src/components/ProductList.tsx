import { useSelector } from "react-redux"
import { InitialState, Product } from "../interfaces"
import ProductOnList from "./ProductOnList"

const ProductList = () => {

    const productList = useSelector<InitialState, Product[]>(state => state.productList)

    return (
        <div className=" flex justify-center w-full">
            <div className=" bg-white w-[90%] rounded-3xl">
                {
                    productList.map( (product) => {
                        const uniqueKey = Math.random()
                        return (
                            <div key={uniqueKey} className=" flex justify-center w-full">
                                    <ProductOnList
                                    product={product.product}
                                    price={product.price}
                                    amount={product.amount}
                                    id={product.id}
                                    />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default ProductList

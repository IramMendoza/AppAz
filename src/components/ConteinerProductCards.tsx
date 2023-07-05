import ProductCard from "./ProductCard"
import { products } from "../products"

const ConteinerProductCards = () => {

  return (
    <div>
        {
            products.map( (product) => {
                return (
                    <div>
                        <ProductCard
                        product={product.product}
                        price={product.price}
                        id={product.id}
                        img={product.img}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ConteinerProductCards

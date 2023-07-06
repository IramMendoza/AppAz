
interface ProductOnList {
    product: string
    price: number
    amount: number
    id: number
}

const ProductOnList = ({product, price, amount, id} : ProductOnList) => {
  return (
    <div
    className=" flex justify-around" 
    key={id}>
        <p>{product}</p>
        <p>{price}</p>
        <p>{amount}</p>
        <button>x</button>
    </div>
  )
}

export default ProductOnList

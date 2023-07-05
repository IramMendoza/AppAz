import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductToList } from '../actions';
import { ProductCardProps } from '../interfaces'


const ProductCard: React.FC<ProductCardProps> = ({ product, price, img, id }) => {

    const dispatch = useDispatch()

    function handleClickAdd () {
        dispatch( addProductToList( product ) )
    }
  
    const numbers = []
    for (let i = 1; i <= 99; i++) {
        numbers.push(<option value={i}>{i}</option>)
    }

    return (
        <div key={id}>
        <img src={img} alt={product} />
        <p>{product}</p>
        <p>{price}</p>
        <select name="amount">{numbers}</select>
        <button onClick={handleClickAdd}>Agregar</button>
        </div>
    )
}

export default ProductCard


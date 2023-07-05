import { useDispatch } from 'react-redux';
import { addProductToList } from '../actions';
import { ProductCardProps } from '../interfaces'


const ProductCard = ({ product, price, img, id } : ProductCardProps) => {

    const dispatch = useDispatch()

    function handleClickAdd () {
        dispatch( addProductToList( product ) )
    }
    // Dispatch para agregar el producto a productList en el reducer
  
    const numbers = []
    for (let i = 1; i <= 10; i++) {
        numbers.push(<option value={i}>{i}</option>)
    }
    // Funciona para manejar la cantidad de productos en cada Card

    return (
        <div
        className=' bg-slate-200 rounded-2xl ml-3 mr-3 shadow-2xl'
        key={id}
        >
            <div className='w-[15rem]'>
                <img
                className=' rounded-t-2xl'
                src={img} 
                alt={product}
                />
            </div>

            <p 
            className=' text-center font-bold mt-1'>
            {product}
            </p>

            <p
            className=' text-center'>
            {price}$
            </p>

            <div 
            className='w-full flex justify-center'>
                <label 
                className='mr-3'>Cantidad</label>
                <select
                className=''
                name="amount">{numbers}</select>
            </div>

            <div 
            className='flex justify-center'>
                <button
                className=' bg-teal-600 text-white rounded-2xl pr-2 pl-2 m-1 pb-1 mb-2' 
                onClick={handleClickAdd}>Agregar</button>
            </div>

        </div>
    )
}

export default ProductCard


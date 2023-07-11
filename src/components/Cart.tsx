import { motion, useAnimation } from "framer-motion"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Table, InitialState, Product } from "../interfaces"
import { deleteAllProductsFromList, addOrderToTable } from "../actions"
import ProductList from "./ProductList"
import IconsCart from "./IconsCart"
import PriceOrder from "./PriceOrder"

const Cart = () => {

  const [value, setValue] = useState("")
  const [addToTable, setAddToTable] = useState(false)
  const tables = useSelector <InitialState, Table[]>( state => state.tables)
  const productList = useSelector <InitialState, Product[]>( state => state.productList)
  const [cartOn, setCartOn] = useState(false)
  const animate = useAnimation()
  const dispatch = useDispatch()
  const variants = {
    open : { y : [-30,0] },
    close : { y : [-30,0] }
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    // Actualizamos el estado con el valor actual del input
    setValue(e.target.value)
  }

  function handleCart () {
    cartOn === true ? animate.start('close') : animate.start('open')
    cartOn === false ? setCartOn(true) : setCartOn(false)
    setAddToTable(false)
    console.log(cartOn)
  }

  function handleAddToTable () {
    addToTable === false ? setAddToTable(true) : setAddToTable(false)
  }

  function handleDeleteAll () {
    dispatch(deleteAllProductsFromList())
  }

  function handleOrderToTable () {
    const createTable : Table = {
      productsOnOrder : productList,
      tableNumber : tables.length + 1,
      client : value
    }
    dispatch(addOrderToTable ( createTable ))
  }

  return (
    <motion.div
      className="backdrop-blur-sm bg-white/50 fixed bottom-0 w-screen rounded-t-3xl"
      initial={{ y : 0 }}
      animate={animate}
      variants={variants}
      transition={{ duration : 0.1 }}
    >
      <IconsCart handleCart={ handleCart }/>
      {cartOn === false ? (
        <div/>
      ) : (
        <div>

          <ProductList/>

          <PriceOrder/>

          <div className="flex justify-center pb-1 pt-2">
            <button className="bg-gradient-to-r from-emerald-700 to-lime-700 text-slate-100 p-1 pl-2 pr-2 rounded-3xl">
              Cobrar
            </button>
          </div>

          <div className="flex justify-center pb-1 pt-1">
            <button className="bg-gradient-to-r from-cyan-800 to-sky-700 text-slate-100 p-1 pl-2 pr-2 rounded-3xl"
                    onClick={handleAddToTable}>
              Agregar a Mesa
            </button>
          </div>

          <div>
            { 
              addToTable === false ? <div/> :

              <div className=" backdrop-blur-sm bg-white/30 w-[90%]">
                <p className=" text-center">Nombre o Apodo del cliente:</p>
                <div className=" w-full flex justify-center pb-2 ">
                  <input
                    className=" rounded-3xl text-center bg-gradient-to-r from-slate-400 to-slate-200"
                    value={value}
                    onChange={handleChange}/>
                </div>
                <div className=" w-full flex justify-center">
                  <button className=" bg-gradient-to-r from-cyan-800 to-sky-700 text-slate-100 p-1 pl-2 pr-2 rounded-3xl">
                    Agregar Orden
                  </button>
                </div>
              </div>

            }
          </div>

          <div className="flex justify-center pb-1 pt-1">
            <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-slate-100 p-1 pl-2 pr-2 rounded-3xl" 
                    onClick={handleDeleteAll}>
              Borrar Todo
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Cart
import React from "react"
import ConteinerProductCard from "./ConteinerProductCard"
import ProductCard from "./ProductCard"
import chickenBurger from '../assets/burger.jpeg'
import burger from '../assets/chickenBurger.jpeg'
import arracheraBurger from '../assets/arracheraBurger.jpeg'

const Menu : React.FC = () => {
  //No encontre una mejor manera de separar mas que dejar ese div
  return (
    <div className=" bg-rose-500 w-screen h-screen">
      <div className=" p-3"/>
      <ConteinerProductCard title="Hamburguesas">
        <ProductCard product="Hamburguesa de Pollo" price={65} id='1' img={chickenBurger}/>
        <ProductCard product="Hamburguesa de Res" price={75} id="2" img={burger}/>
        <ProductCard product="Hamburguesa de Arrachera" price={85} id="3" img={arracheraBurger}/>
      </ConteinerProductCard>
      
    </div>
  )
}

export default Menu

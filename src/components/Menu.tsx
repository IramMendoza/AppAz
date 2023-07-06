import React from "react"
import ConteinerProductCard from "./ConteinerProductCard"
import ProductCard from "./ProductCard"
import chickenBurger from '../assets/burger.jpeg'
import burger from '../assets/chickenBurger.jpeg'
import arracheraBurger from '../assets/arracheraBurger.jpeg'
import fries from '../assets/fries.jpg'
import boneless from '../assets/bonelessImg.jpeg'
import beer from '../assets/cervezaSola.jpeg'
import michelada from '../assets/micheladaSencilla.jpeg'
import micheladaCubana from '../assets/michelada.jpeg'

const Menu : React.FC = () => {
  //No encontre una mejor manera de separar mas que dejar ese div
  return (
    <div className=" bg-rose-500 w-full h-full">
      <div className=" p-8"/>

      <ConteinerProductCard title="Hamburguesas">
        <ProductCard product="Hamburguesa de Pollo" price={65} key='1' img={chickenBurger}/>
        <ProductCard product="Hamburguesa de Res" price={75} key="2" img={burger}/>
        <ProductCard product="Hamburguesa de Arrachera" price={85} key="3" img={arracheraBurger}/>
      </ConteinerProductCard>

      <ConteinerProductCard title="Complementos">
        <ProductCard product="Papas Fritas" price={45} key='4' img={fries}/>
        <ProductCard product="Boneless" price={70} key="5" img={boneless}/>
      </ConteinerProductCard>

      <ConteinerProductCard title="Bebidas">
        <ProductCard product="Cerveza Sola" price={65} key='6' img={beer}/>
        <ProductCard product="Michelada Sencilla" price={75} key="7" img={michelada}/>
        <ProductCard product="Michelada Cubana" price={85} key="8" img={micheladaCubana}/>
      </ConteinerProductCard>
      
    </div>
  )
}

export default Menu

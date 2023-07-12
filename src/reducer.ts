import { CHANGE_CART, CHANGE_TO_MENU } from "./actions"
import { CHANGE_TO_TABLES } from "./actions"
import { ADD_PRODUCT_TO_LIST } from "./actions"
import { DELETE_PRODUCT_FROM_LIST } from "./actions"
import { DELETE_ALL_PRODUCTS_FROM_LIST } from "./actions"
import { ADD_ORDER_TO_TABLE } from "./actions"
import { Action, InitialState, Product } from "./interfaces"
import { products } from "./products"


const initialState : InitialState = {
    menuTables : 'menu',
    productList : [],
    cart: 'close',
    listPriceAndIcons: [],
    priceCart: 0,
    tables: []
}



const reducer = ( state = initialState, action : Action ) => {
    switch (action.type) {

        case CHANGE_TO_MENU :
            return { ...state, menuTables : 'menu' }
        
        case CHANGE_TO_TABLES :
            return { ...state, menuTables : 'tables' }

        case ADD_PRODUCT_TO_LIST :
        // Buscar el producto que coincide con el payload
        let productToAdd = products.find( (product) => product.product === action.payload )
        // Verificar si el producto ya está en la lista
        let productCopy = { ...productToAdd } as Product
        //Saco una copia del producto para que pueda sumar +1 cada vez que es agregado el producto
        let isInProductList = state.productList.some( (product) => product.product === productCopy?.product)
        // Si el producto está en la lista y se encontró
        if (isInProductList && productToAdd) {
            // Busco el pruducto dentro de productList para tomar la cantidad que tiene 
            let productFinded = state.productList.find( (product) => product.product === action.payload) as Product
            // Crear una copia del producto con la cantidad incrementada
            let updatedProduct = { ...productFinded, amount: productFinded?.amount + 1 }
            // Crear un nuevo array con el producto actualizado y los demás iguales
            let updatedProductList = state.productList.map( (product) => product.product === productCopy?.product ? updatedProduct : product )
            // Devolver el nuevo estado con el array actualizado
            // ESTA PARTE ES PARA SACAR EL TOTAL DEL PRECIO
            let updatedListPriceAndIcons = [...state.listPriceAndIcons, productToAdd]
            let totalPrice = updatedListPriceAndIcons.reduce((total, product) => total + product.price, 0)

            return { ...state, productList: updatedProductList, 
                    listPriceAndIcons: [... state.listPriceAndIcons, productToAdd],
                    priceCart : totalPrice }
        }
        // Si el producto no está en la lista y se encontró
        else if (!isInProductList && productToAdd) {
            // Devolver el nuevo estado con el producto agregado al array
            let updatedListPriceAndIcons = [...state.listPriceAndIcons, productToAdd]
            let totalPrice = updatedListPriceAndIcons.reduce((total, product) => total + product.price, 0)
            return { ...state, productList: [...state.productList, productCopy],
                    listPriceAndIcons: [... state.listPriceAndIcons, productToAdd],
                    priceCart : totalPrice}
        }
        // Si no se encontró el producto
        else {
            // Devolver el mismo estado sin cambios
            return { ...state }
        }

        case DELETE_PRODUCT_FROM_LIST:
            // Hay que sacar una copia de productList para poder modificarla
            let updatedProductList = state.productList.filter( product => product.product !== action.payload )
            let updatedListPriceAndIcons = state.listPriceAndIcons.filter ( product => product.product !== action.payload )
            let totalPrice = updatedListPriceAndIcons.reduce((total, product) => total + product.price, 0)
            return {... state, productList: updatedProductList,
                    listPriceAndIcons : updatedListPriceAndIcons,
                    priceCart : totalPrice }

        case DELETE_ALL_PRODUCTS_FROM_LIST:
            let clearProductList: Array<Product> = []
            return {...state, productList : clearProductList,
                    listPriceAndIcons : clearProductList,
                    priceCart : 0 }
        
        case ADD_ORDER_TO_TABLE:
            let order = action.payload
            let emptyProductList : Array<Product> = []
            return { ...state, tables: [...state.tables, order],
                    productList : emptyProductList,
                    listPriceAndIcons : emptyProductList,
                    priceCart : 0,
                    }

        case CHANGE_CART:
            if (state.cart === 'open'){
                return { ...state, cart : 'close' }
            }
            else {
                return { ...state, cart : 'open' }
            }

        default:
            return state
    }
}

export default reducer
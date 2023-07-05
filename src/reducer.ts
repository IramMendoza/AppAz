import { CHANGE_TO_MENU } from "./actions"
import { CHANGE_TO_TABLES } from "./actions"
import { ADD_PRODUCT_TO_LIST } from "./actions"
import { Action, InitialState } from "./interfaces"
import { products } from "./products"


const initialState : InitialState = {
    menuTables : 'menu',
    productList : []
}

const reducer = (state = initialState, action : Action ) => {
    switch (action.type) {

        case CHANGE_TO_MENU :
            return { ...state, menuTables : 'menu' }
        
        case CHANGE_TO_TABLES :
            return { ...state, menuTables : 'tables' }

        case ADD_PRODUCT_TO_LIST :
            let productToAdd = products.find( (product) => product.product === action.payload )
            let isInProductList = state.productList.map( (product) => product.product === productToAdd?.product)
            if (isInProductList && productToAdd){
                return { ...state, productList : [...state.productList, productToAdd?.amount+1] }
            }
            if (isInProductList!){
                return { ...state, productList : [...state.productList, productToAdd] }
            }
            else return { ...state }

        default:
            return state
    }
}

export default reducer
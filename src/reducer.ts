import { CHANGE_TO_MENU } from "./actions"
import { CHANGE_TO_TABLES } from "./actions"
import { Action, InitialState } from "./interfaces"


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
                
        default:
            return state
    }
}

export default reducer
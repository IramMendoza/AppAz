export const CHANGE_TO_MENU = "CHANGE_TO_MENU"

export const changeToMenu = () => {
    return {
        type: CHANGE_TO_MENU
    }
}

export const CHANGE_TO_TABLES = "CHANGE_TO_TABLES"

export const changeToTables = () => {
    return {
        type: CHANGE_TO_TABLES
    }
}

export const ADD_PRODUCT_TO_LIST = "ADD_PRODUCT_TO_LIST"

export const addProductToList = (product : string) => {
    return {
        type: ADD_PRODUCT_TO_LIST,
        payload: product 
    }
}

export const DELETE_PRODUCT_FROM_LIST = "DELETE_PRODUCT_FROM_LIST"

export const deleteProductFromList = (product : string) => {
    return {
        type: DELETE_PRODUCT_FROM_LIST,
        payload: product
    }
}

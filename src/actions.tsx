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
        payload : product
    }
}

export const DELETE_ALL_PRODUCTS_FROM_LIST = "DELETE_ALL_PRODUCT_FROM_LIST"

export const deleteAllProductsFromList = () => {
    return {
        type : DELETE_ALL_PRODUCTS_FROM_LIST
    }
}

export const ADD_ORDER_TO_TABLE = "ADD_ORDER_TO_TABLE"

export const addOrderToTable = (order : object) => {
    return {
        type : ADD_ORDER_TO_TABLE,
        payload : order
    }
}

export const CHANGE_CART = "CHANGE_CART"

export const changeCart = () => {
    return {
        type : CHANGE_CART
    }
}

export const CIRCLE_ADDED_TABLE = "CIRCLE_ADDED_TABLE"

export const circleAddedTable = () => {
    return {
        type : CIRCLE_ADDED_TABLE
    }
}

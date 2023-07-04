export interface Action {
    type : string
    payload? : any 
  }

export interface Product {
    type : string
    price : number
}

export interface InitialState {
    menuTables : string
    productList : Product[]
}


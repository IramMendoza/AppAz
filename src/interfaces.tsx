export interface Action {
  type : string
  payload? : any 
  }

export interface ProductBasic {
  type : string
  price : number
}

export interface InitialState {
  menuTables : string
  productList : Product[]
}

export interface ProductCardProps {
  product: string
  price: number
  img: string
  id: number
  }

export interface Product {
  product: string
  type: string
  price: number
  amount: number
  id: number
  img: string
  }

export interface AppState { 
  menuTables: string
  }

export interface Products {
  products: Array<Product>
}
export enum DataStateEnum {
  LOADING,
  LOADED ,
  ERROR
}


export interface  AppDataState<T> {
  dataState?:DataStateEnum,
  data?:T ,
  errorMessage?:string
}



export enum ProductActionTypes {
  GET_ALL_PRODUCTS = "[Products] Get all products",
  GET_AVAILABLE_PRODUCTS = "[Products] Get available products",
  GET_SELECTED_PRODUCTS = "[Products] Get selected products",
  NEW_PRODUCT = "[Products] New product", 
  SEARCH_PRODUCTS = "[Products] Search products", 
  DELETE_PRODUCT = "[Products] Delete product", 
  EDIT_PRODUCT = "[Prouducts] edit product",
  SELECTED_PRODUCT = "[Products] selected product"
}



export interface ActionEvent {
  type: ProductActionTypes,
  payload?:any
}
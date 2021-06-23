import {Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/products.service'
import {Product} from "../../model/products_model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionTypes} from  "src/app/state/product.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  products$:Observable<AppDataState<Product[]>> | null = null ;
  readonly  DataStateEnum = DataStateEnum ;

  constructor(private productsService: ProduitsService, private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.products$ = this.productsService.getAllProducts()
      .pipe(
        map(data => {
          console.log(data) ;
          return ({dataState: DataStateEnum.LOADED, data: data}) ;
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of ({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }
  onGetSelectedProducts() {
    this.products$ = this.productsService.getSelectedProducts()
      .pipe(
        map(data => {
          console.log(data) ;
          return ({dataState: DataStateEnum.LOADED, data: data}) ;
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of ({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onGetAvailableProducts() {
    this.products$ = this.productsService.getAvalableProducts()
      .pipe(
        map(data => {
          console.log(data) ;
          return ({dataState: DataStateEnum.LOADED, data: data}) ;
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of ({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onSearch(dataForm:any) {

    this.products$ = this.productsService.searchProducts(dataForm.keyword)
      .pipe(
        map(data => {
          console.log(data) ;
          return ({dataState: DataStateEnum.LOADED, data: data}) ;
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of ({dataState: DataStateEnum.ERROR, errorMessage: err.message}))
      );
  }

  onSelected(p:Product) {
    this.productsService.select(p)
      .subscribe(data =>{
        p.selected = data.selected ;
      })
  }

  onDelete(p:Product){
    let v = confirm('etes vous sure?') ;
    if(v==true)
    this.productsService.delete(p)
      .subscribe(data =>{
       this.onGetAllProducts() ;
      })
  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }

  onEdit(p:Product) {
    this.router.navigateByUrl("/editProduct/" + p.id);
  }



  onActionEventEmitter($event:ActionEvent){
    switch($event.type){
      case ProductActionTypes.GET_ALL_PRODUCTS:  this.onGetAllProducts() ; break ;

      case ProductActionTypes.GET_AVAILABLE_PRODUCTS: this.onGetAvailableProducts() ; break;

      case ProductActionTypes.GET_SELECTED_PRODUCTS: this.onGetSelectedProducts() ;break ;

      case ProductActionTypes.NEW_PRODUCT: this.onNewProduct() ; break ;

      case ProductActionTypes.SEARCH_PRODUCTS: this.onSearch($event.payload) ;break ;

      case ProductActionTypes.SELECTED_PRODUCT: this.onSelected($event.payload) ;break ;

      case ProductActionTypes.EDIT_PRODUCT: this.onEdit($event.payload) ;break ;

      case ProductActionTypes.DELETE_PRODUCT: this.onDelete($event.payload) ;break ;
      
    }

  }

}

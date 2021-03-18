import { Component, OnInit } from '@angular/core';
import {ProduitsService} from '../../services/productsservice'
import {Product} from "../../model/products_model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../state/product.state";
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

}

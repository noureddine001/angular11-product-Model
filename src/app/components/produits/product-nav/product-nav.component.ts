import { Component, Input, OnInit ,EventEmitter, Output } from '@angular/core';
import { ActionEvent, ProductActionTypes } from 'src/app/state/product.state';


@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.css']
})
export class ProductNavComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    this.productEventEmitter.emit({type:ProductActionTypes.GET_ALL_PRODUCTS})
  }

  onGetAvailableProducts(){
    this.productEventEmitter.emit({type:ProductActionTypes.GET_AVAILABLE_PRODUCTS})
  }

  onGetSelectedProducts(){
    this.productEventEmitter.emit({type:ProductActionTypes.GET_SELECTED_PRODUCTS})
  }

  onNewProduct(){
    this.productEventEmitter.emit({type:ProductActionTypes.NEW_PRODUCT})
  }
  
  onSearch(keyword: any){
    this.productEventEmitter.emit({type:ProductActionTypes.SEARCH_PRODUCTS, payload:keyword})
  }
}

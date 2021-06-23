import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from 'src/app/model/products_model';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products$:Observable<AppDataState<Product[]>> | null = null ;
  @Output() productEventEmitter: EventEmitter<ActionEvent>  = new EventEmitter()

  readonly DataStateEnum = DataStateEnum

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionTypes.SELECTED_PRODUCT, 
      payload:p
    })
  }

  onDelete(p:Product) {
    this.productEventEmitter.emit({
      type:ProductActionTypes.DELETE_PRODUCT,
      payload:p
    })
  }

  onEdit(p: Product){
    this.productEventEmitter.emit({
      type:ProductActionTypes.DELETE_PRODUCT,
      payload:p
    })
  }

  onActionEventEmitter($event:ActionEvent){
    switch($event.type){
      case ProductActionTypes.SELECTED_PRODUCT: this.onSelected($event.payload) ;break ;

      case ProductActionTypes.EDIT_PRODUCT: this.onEdit($event.payload) ;break ;

      case ProductActionTypes.DELETE_PRODUCT: this.onDelete($event.payload) ;break ;
      
    }
}


}

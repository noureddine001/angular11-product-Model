import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/products_model';
import { ActionEvent,ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() p?:Product
  @Output() productEventEmitter:EventEmitter<ActionEvent> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionTypes.SELECTED_PRODUCT, 
      payload:p
    })
  }

  onDelete(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionTypes.DELETE_PRODUCT,
      payload:p
    })
  }

  onEdit(p:Product){
    this.productEventEmitter.emit({
      type:ProductActionTypes.DELETE_PRODUCT,
      payload:p
    })
  }



}

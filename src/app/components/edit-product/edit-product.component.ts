import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitsService} from "../../services/productsservice";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  submitted:boolean = false;
  productId:number ;
  productFormGroup?: FormGroup;
  constructor(private activatedRoute:ActivatedRoute, private ps:ProduitsService, private fb:FormBuilder) {
    this.productId = this.activatedRoute.snapshot.params.id ;
  }

  ngOnInit(): void {
    this.ps.getProduct(this.productId)
      .subscribe(product =>{
       this.productFormGroup =  this.fb.group({
          id: [product.id, Validators.required],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required]
        })
      });

  }

  onUpDateProduct(){
    this.ps.upDateProduct(this.productFormGroup?.value)
      .subscribe(data => {
        alert("Success Product UpDated ");
      })
  }

}

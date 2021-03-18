import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitsService} from "../../services/productsservice";



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {


   productFormGroup:FormGroup | null=null;
    submitted:boolean = false ;

  constructor(private fb:FormBuilder, private ps:ProduitsService) {  }
  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: ["", Validators.required],
      price:[null, Validators.required],
      quantity:[null, Validators.required],
      selected:[true, Validators.required],
      available:[true, Validators.required]
    });
  }
  onSaveProduct() {

    this.submitted = true ;
    if(this.productFormGroup?.invalid) return ;
    this.ps.save(this.productFormGroup?.value)
      .subscribe(data =>{
        alert("success Saving product");
        this.productFormGroup?.reset() ;
      });
  }

}

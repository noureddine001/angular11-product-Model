import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProduitsComponent} from "./components/produits/produits.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";

const routes: Routes = [
  {path:"produits" , component:ProduitsComponent} ,
  {path:"newProduct" , component:AddProductComponent} ,
  {path:"editProduct/:id" , component:EditProductComponent} ,
  {path:"" , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


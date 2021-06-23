import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule, HttpResponseBase} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductNavComponent } from './components/produits/product-nav/product-nav.component';
import { ProductListComponent } from './components/produits/product-list/product-list.component';
import { ProductItemComponent } from './components/produits/product-list/product-item/product-item.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProduitsComponent,
    HomeComponent,
    AddProductComponent,
    EditProductComponent,
    ProductNavComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

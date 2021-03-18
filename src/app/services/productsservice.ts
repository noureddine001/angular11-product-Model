import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/products_model";

@Injectable({providedIn:"root"})
export class ProduitsService {
  constructor(private http:HttpClient) {

  }

  getAllProducts() :Observable<Product[]>{
    let host = (Math.random()<0.8)?environment.host:environment.unreachableHost;
      return this.http.get<Product[]>(host+'/produits') ;
  }

  getSelectedProducts() :Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+'/produits?selected=true') ;
  }

  getAvalableProducts() :Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+'/produits?available=true') ;
  }

  searchProducts(keyword:string) :Observable<Product[]>{
    let host = environment.host;
    return this.http.get<Product[]>(host+'/produits?name_like='+ keyword) ;
  }

  select(product:Product) :Observable<Product>{
    let host = environment.host;
    product.selected = !product.selected ;
    return this.http.put<Product>(host+'/produits/'+product.id,product) ;
  }
  delete(product:Product):Observable<void>{
    let host = environment.host;
    return this.http.delete<void>(host+'/produits/'+product.id) ;
  }

  save(product:Product):Observable<Product>{
    let host = environment.host;
    return this.http.post<Product>(host+'/produits',product) ;
  }

  getProduct(id:number) :Observable<Product>{
    let host = environment.host;
    return this.http.get<Product>(host+'/produits/' + id) ;
  }

  upDateProduct(product:Product) :Observable<Product>{
    let host = environment.host;
    return this.http.put<Product>(host+'/produits/' + product.id,product) ;
  }


}

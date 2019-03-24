import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
import { Order } from './Model/order';
import { Product } from './Model/product';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private httpOptions: any;
  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }



  private orderUrl = 'http://localhost:64374/api/order';
  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  public getOrder(orederId: number): Observable<Order> {
    return this.http.get<Order>(this.orderUrl+"/"+orederId);
  }
  public saveOrder(order:Order){
    return this.http.post<Order>(this.orderUrl, order);
    // return this.http.post<Order>(this.orderUrl,JSON.stringify(order),this.httpOptions).pipe(
    //   catchError(this.handleError)
    // );
  }

  private productUrl = 'http://localhost:64374/api/product';
  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl).pipe(
      tap(data=>console.log('Product:'+ JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    let errorMessage = error.status + " : " + error.message;
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}

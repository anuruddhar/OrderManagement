import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
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
  private productUrl = 'http://localhost:64374/api/product';

  public getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  public getOrder(orederId: number): Observable<Order> {
    return this.http.get<Order>(this.orderUrl + '/' + orederId);
  }
  public saveOrder(order: Order) {
    // return this.http.post<Order>(this.orderUrl, order);
    return this.http.post<Order>(this.orderUrl, order, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(
      tap(data => console.log('Product:' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // private handleError(error: HttpErrorResponse) {
  //   const errorMessage = error.status + ' : ' + error.message;
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}

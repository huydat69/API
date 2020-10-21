import { HttpClient, HttpHeaders } from '@angular/common/http';
import {product} from 'src/app/model1/product';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { from, Observable, throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService  {
  constructor(private http: HttpClient) {}
  private host = "https://localhost:44363/api/Products";
  getAll(): Observable<product[]> {
    return this.http.get<product[]>(
      this.host
    );
    }
  GetbyId(id){
    const url=`${this.host}/${id}`;
    return this.http.get(url);
  }
  getaaaa():Observable<product[]> {
    debugger;
  return  this.http.get<product[]>(this.host).pipe(
    tap(res=>
     {
       debugger
     }),
  );
 }
}

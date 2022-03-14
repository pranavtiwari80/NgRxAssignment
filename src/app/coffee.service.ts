import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ICoffee } from './coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  public coffeeListUrl = 'https://random-data-api.com/api/coffee/random_coffee?size=50';

  constructor(private http: HttpClient) { }

  getCoffeeList(): Observable<ICoffee[]> {
    return this.http.get<ICoffee[]>(this.coffeeListUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    //console.error(errorMessage);
    return throwError(errorMessage);
  }
}


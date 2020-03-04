import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICHARACTERS } from './interfaces/characters';
import { IPLANETS } from './interfaces/planets';
import { ISPECIES } from './interfaces/species';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  constructor(private http: HttpClient) { }

  getStarWarsCharacter(url: string): Observable<ICHARACTERS> {
    return this.http.get<ICHARACTERS>(url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  getStarWarsPlanet(url: string): Observable<IPLANETS> {
    return this.http.get<IPLANETS>(url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  getStarWarsSpecies(url: string): Observable<ISPECIES> {
    return this.http.get<ISPECIES>(url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}

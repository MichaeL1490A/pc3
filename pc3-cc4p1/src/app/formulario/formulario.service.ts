import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  private urlEndPoint: string = 'http://localhost:8080/consultar-rol';


  getRol(email: string, password: string): Observable<String> {
    return this.http.get<String>(`${this.urlEndPoint}/${email}/${password}`).pipe(
      catchError(e => {
        return throwError(() => e);
      })
    )
  }
}

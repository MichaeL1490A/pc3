import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlmacenFacturacionService {


  constructor(private http: HttpClient) { }

  private urlEndPoint: string = 'http://localhost:8080/consultar-rol';


  getInformacion(producto: string, cantidad: number, id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlEndPoint}/${producto}/${cantidad}/${id}`).pipe(
      catchError(e => {
        return throwError(() => e);
      })
    )
  }
}

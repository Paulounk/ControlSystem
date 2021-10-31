import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Document } from '../model/document.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  baseUrl = "http://localhost:8080/documents"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(document: Document): Observable<Document> {

    return this.http.post<Document>(this.baseUrl, document).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Algo deu errado. Verifique se o backend está rodando!', true)
    return EMPTY
  }

  read(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl)
  }

  readById(id: string): Observable<Document> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Document>(url)
  }

  update(document: Document): Observable<Document> {
    return this.http.put<Document>(this.baseUrl, document)
  }

  delete(id: string): Observable<Document> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Document>(url)
  }

}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from './document.model';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  baseUrl = "http://localhost:3000/documents"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(document: Document): Observable<Document> { 
    return this.http.post<Document>(this.baseUrl, document)
  }

  read(): Observable<Document[]>{
    return this.http.get<Document[]>(this.baseUrl)
  }

  readById(id: string): Observable<Document>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Document>(url)
  }

  

}

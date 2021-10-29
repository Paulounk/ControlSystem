import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[] = [];
  horasTotais: number = 0;
  
  columns: string[] = ['name', 'activity', 'hours', 'status', 'action']

  constructor(
    private router: Router,
    private documentService: DocumentService
  ) { }

  ngOnInit(): void {
    this.getDocuments()
  }

  getDocuments() {
    this.documentService.read().subscribe(documents => {
      this.documents = documents
      this.documents.filter(i => {
        return i.status === "Homologado"
      }).forEach(i => {
        this.horasTotais += i.hours
      })
    })
  }

  navigateToDocumentCreate(): void{
    this.router.navigate(['/document/create'])
  }



}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../../model/document.model';
import { DocumentService } from '../../service/document.service';

@Component({
  selector: 'app-document-delete',
  templateUrl: './document-delete.component.html',
  styleUrls: ['./document-delete.component.css']
})
export class DocumentDeleteComponent implements OnInit {

  document: Document
  id: ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.documentService.readById(this.id).subscribe(document => {
      this.document = document
    })
  }

  deleteDocument(): void {
    this.id = this.route.snapshot.params['id']
    this.documentService.delete(this.id).subscribe(document => {
      this.document = document
      this.router.navigate(['/document'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/document'])
  }

}

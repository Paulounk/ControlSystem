import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.css']
})
export class DocumentUpdateComponent implements OnInit {

  document: Document

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.documentService.readById(id).subscribe(document => {
      this.document = document
    })
  }

  updateDocument(): void {
    this.documentService.update(this.document).subscribe(() => {
      this.documentService.showMessage('Alteração feita com sucesso!')
      this.router.navigate(['/document'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/document'])
  }

}

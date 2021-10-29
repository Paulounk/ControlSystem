import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Router } from '@angular/router';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-create',
  templateUrl: './document-create.component.html',
  styleUrls: ['./document-create.component.css']
})
export class DocumentCreateComponent implements OnInit {

  document: Document = {
    name: "",
    activity: "",
    hours: 0,
    link: "",
    status: "Homologado"
  }

  constructor(
    private documentService: DocumentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
  }

  createDocument(): void{
    this.documentService.create(this.document).subscribe(() => {
      this.documentService.showMessage('Documento cadastrado com sucesso!')
      this.router.navigate(['/document'])
    })
  }

  cancelar(): void{
    this.router.navigate(['/document'])
  }

}

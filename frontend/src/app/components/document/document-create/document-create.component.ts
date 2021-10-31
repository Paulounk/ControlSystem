import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document.service';
import { Router } from '@angular/router';
import { Document } from '../../model/document.model';

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
    status: 'RECUSADO'
  }

  constructor(
    private documentService: DocumentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
  }

  createDocument(): void{

    if(this.document.name === null || this.document.name === ''){
      this.documentService.showMessage('O campo nome é obrigatorio!', true)
    }
    else if(this.document.activity === null || this.document.activity === ''){
      this.documentService.showMessage('O campo atividade é obrigatorio!', true)
    }
    else if(this.document.hours === null || this.document.hours === 0){
      this.documentService.showMessage('O campo quantidade de horas é obrigatorio!', true)
    }
    else if(this.isValidUrl(this.document.link) === false){
      this.documentService.showMessage('O campo link é obrigatório. Favor informar uma URL valida!', true)
    }
    else{
      this.documentService.create(this.document).subscribe(() => {
        this.documentService.showMessage('Documento cadastrado com sucesso!')
        this.router.navigate(['/document'])
      }, erro =>{
        if(erro.status){
          this.documentService.showMessage('Verifique se o servidor está rodando!', true)
        }
      })
    }
  }

  cancelar(): void{
    this.router.navigate(['/document'])
  }

  isValidUrl(link: string) {
    try {
      new URL(link);
    } catch (_) {
      return false;
    }

    return true;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-document-crud',
  templateUrl: './document-crud.component.html',
  styleUrls: ['./document-crud.component.css']
})
export class DocumentCrudComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToDocumentCreate(): void{
    this.router.navigate(['/document/create'])
  }

}

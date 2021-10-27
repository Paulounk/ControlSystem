import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DocumentCrudComponent } from './views/document-crud/document-crud.component'
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "document", component: DocumentCrudComponent},
  {path: "document/create", component: DocumentCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { DocumentUpdateComponent } from './components/document/document-update/document-update.component';
import { DocumentDeleteComponent } from './components/document/document-delete/document-delete.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "document", component: DocumentListComponent},
  {path: "document/create", component: DocumentCreateComponent},
  {path: "document/update/:id", component: DocumentUpdateComponent},
  {path: "document/delete/:id", component: DocumentDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

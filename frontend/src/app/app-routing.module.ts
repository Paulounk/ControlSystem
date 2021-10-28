import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DocumentCreateComponent } from './components/document/document-create/document-create.component';
import { DocumentListComponent } from './components/document/document-list/document-list.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "document", component: DocumentListComponent},
  {path: "document/create", component: DocumentCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

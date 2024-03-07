import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';
import { AddNotesComponent } from './add-note/add-note.component';

const routes: Routes = [{path:'add-notes',component:AddNotesComponent},
{ path: '', component: NotesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }

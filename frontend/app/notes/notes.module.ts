import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNotesComponent } from './add-note/add-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';


@NgModule({
  declarations: [
    NotesComponent,
    AddNotesComponent,
    UpdateNoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule
  ]
})
export class NotesModule { }

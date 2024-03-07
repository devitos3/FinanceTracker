import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Notes } from 'src/app/shared/models/notes.model'; // Adjust the import path as necessary
import { NotesService } from 'src/app/shared/services/notes-s.service';// Adjust the import path as necessary
import { Router } from '@angular/router';

@Component({
 selector: 'app-add-notes',
 templateUrl: './add-note.component.html',
 styleUrls: ['./add-note.component.scss']
})
export class AddNotesComponent implements OnInit {
 notes: Notes[] = [];
 noteForm: FormGroup;
 showMsg: boolean = false;
 userId: number;

 constructor(private notesService: NotesService, private router: Router) {
    this.userId = parseInt(localStorage.getItem('userID'));
 }

 ngOnInit(): void {
    this.noteForm = new FormGroup({
      UserID: new FormControl(this.userId),
      Content: new FormControl(''),
      NoteCreated: new FormControl('')
    });
 }

 onSubmit() {
    if (this.noteForm.valid) {
      const newNote: Notes = this.noteForm.value;
      newNote.noteCreated = new Date();
      this.notesService.addNote(newNote).subscribe(() => {
        console.log('Note added successfully');
        this.showMsg = true;
        // Optionally, refresh the list of notes
        // this.getNotes(); // Implement this method if needed
      });
    }
 }
}

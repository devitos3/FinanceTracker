import { Component } from '@angular/core';
import { NotesService } from '../shared/services/notes-s.service';
import { Notes } from '../shared/models/notes.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notes: Notes[] = [];
 
  noteForm: FormGroup;
  userId: number;
 
  constructor(
     public notesService: NotesService,
     public router: Router,
     private excelService: ExcelService
  ) {
     this.userId = parseInt(localStorage.getItem('userID'));
  }
 
  ngOnInit(): void {
     this.getNotes();
    //  this.initForm();
  }
 
  getNotes(): void {
     this.notesService.getNotesByUserID(this.userId).subscribe((data: Notes[]) => {
       this.notes = data;
     });
  }
  
//  initForm(): void {
//   this.noteForm = new FormGroup({
//     UserID: new FormControl(''),
//     content: new FormControl(''),
//     noteCreated: new FormControl('')
//   });
// }

// onSubmit(): void {
//   if (this.noteForm.valid) {
//     const newNote = this.noteForm.value as Notes;
//     this.notesService.addNote(newNote).subscribe(() => {
//       this.getNotes(); // Refresh notes list after adding a new note
//       this.router.navigate(['/notes']); // Navigate back to notes page or desired route
//     });
//   }
// }
navigateToAddNotes() {
  this.router.navigate(['notes/add-notes']); // Adjust the path as necessary
}

deleteNote(id: number): void {
  this.notesService.deleteNote(id).subscribe(() => {
     console.log('Note deleted successfully');
     this.getNotes(); // Refresh the notes list after deleting a note
  });
 }
 

}

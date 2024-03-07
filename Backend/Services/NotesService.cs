using System.Collections.Generic;
using Tracker.Models;
using Tracker.Repository.Interfaces;
using Tracker.Services.Interfaces;

namespace Tracker.Services
{
    public class NotesService : INotesService
    {
        private INotesRepo _NotesRepo;

        public NotesService(INotesRepo notesRepo)
        {
            _NotesRepo = notesRepo;
        }

        public void CreateNote(Notes note)
        {
            _NotesRepo.CreateNote(note);
        }

        public Notes GetNoteById(int id)
        {
            return _NotesRepo.GetNoteById(id);
        }

        public List<Notes> GetNotes()
        {
            return _NotesRepo.GetNotes();
        }

        public void UpdateNote(Notes note)
        {
            _NotesRepo.UpdateNote(note);
        }

        public void DeleteNote(int id)
        {
            _NotesRepo.DeleteNote(id);
        }

        public List<Notes> GetNotesByUserId(int userId)
        {
            return _NotesRepo.GetNotesByUserId(userId);
        }
    }
}

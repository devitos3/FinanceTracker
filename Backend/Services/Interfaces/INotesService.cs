using Tracker.Models;

namespace Tracker.Services.Interfaces
{
    public interface INotesService
    {
        Notes GetNoteById(int id);
        List<Notes> GetNotes();

        void CreateNote(Notes note);

        void UpdateNote(Notes note);

        void DeleteNote(int id);

        List<Notes> GetNotesByUserId(int userId);
    }
}

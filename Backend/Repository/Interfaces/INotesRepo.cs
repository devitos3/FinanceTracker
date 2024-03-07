using Tracker.Models;

namespace Tracker.Repository.Interfaces
{
    public interface INotesRepo
    {
        Notes GetNoteById(int id);
        List<Notes> GetNotes();

        void CreateNote(Notes note);

        void UpdateNote(Notes note);

        void DeleteNote(int id);

        List<Notes> GetNotesByUserId(int userId);
    }
}

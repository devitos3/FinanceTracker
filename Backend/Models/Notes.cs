namespace Tracker.Models
{
    public class Notes
    {
        public int NoteID { get; set; }
        public int UserID { get; set; }
        public string Content { get; set; }
        public DateTime NoteCreated { get; set; }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tracker.Models;
using Tracker.Services;
using Tracker.Services.Interfaces;

namespace Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        INotesService _notesService;
        public NotesController(INotesService notesService)
        {
            _notesService = notesService;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_notesService.GetNoteById(id));
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetByUserId(int userId)
        {
            return Ok(_notesService.GetNotesByUserId(userId));
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_notesService.GetNotes());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Notes note)
        {
            _notesService.CreateNote(note);
            return CreatedAtAction("Get", new { id = note.NoteID }, note);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Notes note)
        {
            if (id != note.NoteID)
            {
                return BadRequest();
            }

            var existingNote = _notesService.GetNoteById(id);
            if (existingNote == null)
            {
                return NotFound();
            }

            _notesService.UpdateNote(note);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var note = _notesService.GetNoteById(id);
            if (note == null)
            {
                return NotFound();
            }

            _notesService.DeleteNote(id);

            return NoContent();
        }
    }
}

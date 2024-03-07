using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Tracker.Models;
using Tracker.Repository.Interfaces;

namespace Tracker.Repository
{
    public class NotesRepo : INotesRepo
    {
        readonly string ConnectionString = "";
        public NotesRepo()
        {
            ConnectionString = "Data Source=APINP-ELPTCKU92\\SQLEXPRESS;Initial Catalog=Tracker;Persist Security Info=True;User ID=tap2023;Password=tap2023;Encrypt=False";
        }

        public void CreateNote(Notes note)
        {
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "INSERT INTO Notes (UserID, Content, NoteCreated) VALUES (@UserID, @Content, @NoteCreated)";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@UserID", note.UserID);
                cmd.Parameters.AddWithValue("@Content", note.Content);
                cmd.Parameters.AddWithValue("@NoteCreated", note.NoteCreated);
                con.Open();
                cmd.ExecuteNonQuery();
            }
        }

        public Notes GetNoteById(int id)
        {
            Notes note = null;
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = $"SELECT * FROM Notes WHERE NoteID={id}";
                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = query;
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                if (dr.Read())
                {
                    note = new Notes();
                    note.NoteID = (int)dr["NoteID"];
                    note.UserID = (int)dr["UserID"];
                    note.Content = dr["Content"].ToString();
                    note.NoteCreated = (DateTime)dr["NoteCreated"];
                }
            }
            return note;
        }

        public List<Notes> GetNotes()
        {
            List<Notes> notes = new List<Notes>();
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "SELECT * FROM Notes";
                SqlCommand cmd = con.CreateCommand();
                cmd.CommandText = query;
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    Notes note = new Notes();
                    note.NoteID = (int)dr["NoteID"];
                    note.UserID = (int)dr["UserID"];
                    note.Content = dr["Content"].ToString();
                    note.NoteCreated = (DateTime)dr["NoteCreated"];

                    notes.Add(note);
                }
            }
            return notes;
        }

        public void UpdateNote(Notes note)
        {
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "UPDATE Notes SET UserID=@UserID, Content=@Content, NoteCreated=@NoteCreated WHERE NoteID=@NoteID";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@NoteID", note.NoteID);
                cmd.Parameters.AddWithValue("@UserID", note.UserID);
                cmd.Parameters.AddWithValue("@Content", note.Content);
                cmd.Parameters.AddWithValue("@NoteCreated", note.NoteCreated);
                con.Open();
                cmd.ExecuteNonQuery();
            }
        }

        public void DeleteNote(int id)
        {
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string deleteNoteQuery = "DELETE FROM Notes WHERE NoteID = @NoteID";
                SqlCommand deleteNoteCmd = new SqlCommand(deleteNoteQuery, con);
                deleteNoteCmd.Parameters.AddWithValue("@NoteID", id);
                con.Open();
                deleteNoteCmd.ExecuteNonQuery();
            }
        }

        public List<Notes> GetNotesByUserId(int userId)
        {
            List<Notes> notes = new List<Notes>();
            using (SqlConnection con = new SqlConnection(ConnectionString))
            {
                string query = "SELECT * FROM Notes WHERE UserID = @UserID";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@UserID", userId);
                con.Open();
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    Notes note = new Notes();
                    note.NoteID = (int)dr["NoteID"];
                    note.UserID = (int)dr["UserID"];
                    note.Content = dr["Content"].ToString();
                    note.NoteCreated = (DateTime)dr["NoteCreated"];

                    notes.Add(note);
                }
            }
            return notes;
        }
    }
}

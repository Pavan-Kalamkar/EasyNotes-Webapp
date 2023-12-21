import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from "react-router-dom";
import './css/Notes.css';

const Notes = (props) => {

  const context = useContext(notecontext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('authtoken')) {
      getNotes()
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }

  const handleclick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click()
    props.showAlert("Updated Successfully", "success");
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <div>
        {/* Button trigger modal */}
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form className='my-3'>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" minLength={5} required
                      value={note.etitle} onChange={onChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" name="edescription" minLength={5} required
                      value={note.edescription} onChange={onChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name="etag" minLength={5} required
                      value={note.etag} onChange={onChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="fa-solid fa-xmark"></i></button>
                <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" onClick={handleclick} className="btn btn-primary"><i className="fa-solid fa-check"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="notes-container">
        <h4 className='my-4 title'> Your Notes </h4>
        <div className='mb-4'>
          { // eslint-disable-next-line
            notes.length == 0 && 'No Notes To Display'
          }
        </div>
        <div className='notes'>
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert} />
          })}
        </div>
      </div>
    </>
  )
}

export default Notes
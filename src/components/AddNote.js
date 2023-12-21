import React, { useState } from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/noteContext'
import './css/Addnote.css'



const AddNote = (props) => {

    const context = useContext(notecontext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag,);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added Successfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="addnote-container">
            <div className="Container addnote">
                <div className="form">
                    <form className='my-3'>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="title" minLength={5} required value={note.title}
                                onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" name="description" minLength={5} required value={note.description}
                                onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" className="form-control" id="tag" name="tag" minLength={5} required value={note.tag}
                                onChange={onChange} />
                        </div>
                        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary mb-4" onClick={handleclick}><i className="fa-solid fa-plus"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNote
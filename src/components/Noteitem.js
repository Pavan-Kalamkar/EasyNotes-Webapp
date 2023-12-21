import React from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/noteContext'
import './css/Notes.css'

const Noteitem = (props) => {

    const context = useContext(notecontext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <>
            <div className="card mb-4">
                <div className="card-header">
                    <p className='m-0'>{note.title}</p>
                    <div className="card-buttons">
                        <i className="fa-solid fa-trash" onClick={() => {
                            deleteNote(note._id);
                            props.showAlert("Deleted Successfully", "success")
                        }}></i>
                        <i className="fa-solid fa-pen-to-square ms-4" onClick={() => { updateNote(note); }}></i>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{note.description}</p>
                    <p className="card-text"><i className="fa-solid fa-tag"></i> {note.tag}</p>
                </div>
            </div>
        </>

    )
}

export default Noteitem
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function Viewer({ onDeleteNote, activeNote }) {
    const navigate = useNavigate();

    const editNote = (noteId) => {
        navigate(`/notes/${noteId}/edit`);
    }

    const onDelete = (noteId) => {
        const answer = window.confirm("Are you sure?");
        if (answer) {
            onDeleteNote(noteId);
        }
        navigate(`/`);
    }

    if(!activeNote) {return <div className='no-active-note'>Select a note, or create a new one.</div>; }

    return (
        <div className='app-main'>
            <div className='app-main-note-edit'>
                <h1 id= 'title'>{activeNote.title}</h1>
                <button id='save' onClick={() => editNote(activeNote.id)}>Edit</button>
                <button id='delete' onClick={() => onDelete(activeNote.id)}>Delete</button>
                <div className='app-main-body'>
                    <p>{activeNote.body}</p>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default Viewer;

import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({ onDeleteNote, activeNote, onUpdateNote }) {
    const navigate = useNavigate();
    
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    const onSave = (noteId) => {
        navigate(`/notes/${noteId}`);
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
                <button id='save' onClick={() => onSave(activeNote.id)}>Save</button>
                <button id='delete' onClick={() => onDelete(activeNote.id)}>Delete</button>
                <input type='text' id='title' placeholder='Untitled' value={activeNote.title} onChange={(e) => onEditField('title', e.target.value)} autoFocus/>
                <div className='app-main-body'>
                    <ReactQuill id='body' theme="snow" value={activeNote.body} onChange={(e) => onEditField('body', e.target.value)} placeholder='Your Note Here'/>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default Editor;

/* 

*/

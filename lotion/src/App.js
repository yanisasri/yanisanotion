import { useEffect, useState } from 'react';
import { Navigate , BrowserRouter, Routes, Route } from 'react-router-dom';
import uuid from 'react-uuid';
import './App.css';
import Editor from './Editor.js';
import Format from './Format.js';
import Viewer from './Viewer.js';

function App() {
  const exist = localStorage.getItem('notes');

  const [notes, setNotes] = useState(exist ? JSON.parse(exist) : []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);


  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled',
      body: '',
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Format notes={notes} onAddNote={onAddNote} activeNote={activeNote} setActiveNote={setActiveNote}/>}>
          <Route path='/' element={<Navigate to ='/notes'/>}/>
          <Route path='/notes' element={<Viewer onDeleteNote={onDeleteNote} activeNote={getActiveNote()}/>}/>
          <Route path='/notes/:activeNote/edit' element={<Editor onDeleteNote={onDeleteNote} activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>}/>
          <Route path='/notes/:activeNote' element={<Viewer onDeleteNote={onDeleteNote} activeNote={getActiveNote()}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

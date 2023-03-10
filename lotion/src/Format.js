import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Format({ notes, onAddNote, activeNote, setActiveNote, hideSidebar }) {

    const[visible, setVisible] = useState(true)

    function menuBtn() {
        setVisible(!visible);
    }

    return (
        <div className="App">
            <div className='top-bar'>
              <h1 id='head'>Lotion</h1>
              <p id='subhead'>Like Notion, but worse.</p>
              <button id='menu' onClick={() => hideSidebar}>&#9776;</button>
            </div>
            <Sidebar notes={notes} onAddNote={onAddNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
            <Outlet/>
        </div>
    );
}

export default Format;
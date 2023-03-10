import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Format({ notes, onAddNote, activeNote, setActiveNote }) {
  const showSidebar = () => {
    document.getElementsByClassName('app-sidebar').style.display = 'list-item';
    document.getElementsByClassName('app-main').style.display = 'list-item';
  }

  const hideSidebar = () => {
    document.getElementsByClassName('app-sidebar').style.display = 'none';
    document.getElementsByClassName('app-main').style.width = '100%';
    document.getElementsByClassName('no-active-note').style.width = '100%';
  }

  if (!showSidebar) {
    return (
        <div className="App">
            <div className='top-bar'>
              <h1 id='head'>Lotion</h1>
              <p id='subhead'>Like Notion, but worse.</p>
              <button id='menu' onClick={showSidebar}>&#9776;</button>
            </div>
            <Sidebar notes={notes} onAddNote={onAddNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
            <Outlet/>
        </div>
    );
  } else {
    return (
        <div className="App">
            <div className='top-bar'>
              <h1 id='head'>Lotion</h1>
              <p id='subhead'>Like Notion, but worse.</p>
              <button id='menu' onClick={hideSidebar}>&#9776;</button>
            </div>
            <Sidebar notes={notes} onAddNote={onAddNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
            <Outlet/>
        </div>
    );
  }
}

export default Format;
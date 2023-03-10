import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Format({ notes, onAddNote, activeNote, setActiveNote }) {
    function changeSidebar() {
        if (document.getElementById('sidebar1').style.display === 'list-item') {
            document.getElementById('sidebar1').style.display = 'none';
            document.getElementById('main1').style.width = '100%';
            document.getElementById('no-active-note').style.width = '100%';
        } else {
            document.getElementById('sidebar1').style.display = 'list-item';
            document.getElementById('main1').style.width = '70%';
            document.getElementById('no-active-note').style.width = '70%';
        }
    }

    return (
        <div className='App'>
            <div className='top-bar'>
            <h1 id='head'>Lotion</h1>
            <p id='subhead'>Like Notion, but much worse.</p>
            <button id='menu' onClick='changeSidebar();'>&#9776;</button>
            </div>
            <Sidebar notes={notes} onAddNote={onAddNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
            <Outlet/>
        </div>
    );
}

export default Format;
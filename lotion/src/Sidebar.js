import { useNavigate } from "react-router-dom";

function Sidebar({ notes, onAddNote, activeNote, setActiveNote }) {
    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified)

    const navigate = useNavigate();

    const goToNote = (noteId) => {
        setActiveNote(noteId);
        navigate(`/notes/${noteId}/edit`);
    }

    if(notes.length === 0) {
        return (
            <><div className='app-sidebar'>
                <div className='app-sidebar-header'>
                    <h1>Notes</h1>
                    <button id='add' onClick={onAddNote}>+</button>
                </div>
                <div className='no-notes'>No Notes Yet.</div>
            </div>
            </>
        );
    }

    return (
        <div className='app-sidebar' id='sidebar1'>
            <div className='app-sidebar-header'>
                <h1>Notes</h1>
                <button id='add' onClick={onAddNote}>+</button>
            </div>
            <div className='app-sidebar-notes'>
                {sortedNotes.map((note) => (
                    <div className={`app-sidebar-note ${note.id === activeNote && 'active'}`} onClick={() => goToNote(note.id)}>
                        <div className='sidebar-note-title'>
                            <strong>{note.title}</strong>
                        </div>
                        <small className='note-meta'>
                            Last modified {new Date(note.lastModified).toLocaleDateString('en-CA', {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                        </small>
                        <p>{note.body && note.body.substr(0, 100) + '...'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';

import './note-overview.css';
import { getNotes } from '../../services/api';
import { AuthContext } from '../../contexts/auth';

export const NoteOverview = () => {
  const { logout } = useContext(AuthContext)
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getNotes();
      setNotes(response.data)
      setLoading(false);
    })();
  }, [])


  if(loading) {
   return <div className="loading">Loading data...</div>
  }

  const handleLogout = () => {
    logout();
  }

  return (
    <div className="NoteOverview">
      <FontAwesomeIcon icon={faHardHat} />
      <ul>
        {
          notes.map((note) => (
            <li key={note.id}>
              {note.title} - {note.description}
            </li>
          ))
        }
      </ul>
      <button type='submit' onClick={handleLogout}>teste</button>
    </div>
  )
}

export default NoteOverview;
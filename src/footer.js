import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import './footer.css';
const videoCompo = ({ channel, description, song }) => {
  return (
    <div className="footer">
      <span className="user">{channel}</span>
      <p>{description}</p>
      <MusicNoteIcon className="note" />
      <marquee scrollamount="3">{song}</marquee>
    </div>
  );
};

export default videoCompo;
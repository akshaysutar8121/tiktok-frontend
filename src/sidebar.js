import './sidebar.css';
import { useState } from 'react';

import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const sideBar = ({ likes, shares, messeges }) => {
  const [like, setlike] = useState(false);

  return (
    <div className="sideBar">
      <div className="fav">
        {like ? (
          <FavoriteIcon
            onClick={(e) => {
              setlike(false);
            }}
          />
        ) : (
          <FavoriteBorderIcon
            onClick={(e) => {
              setlike(true);
            }}
          />
        )}

        <p>{like ? parseInt(likes) + 1 : likes}</p>
      </div>
      <div className="mess">
        <MessageIcon />
        <p>{messeges}</p>
      </div>
      <div className="share">
        <ShareIcon />
        <p>{shares}</p>
      </div>

      <img src="https://firebasestorage.googleapis.com/v0/b/seconddatabase-d440a.appspot.com/o/disc-removebg-preview(2).png?alt=media&token=03c6de01-90b4-46ed-a4c8-497b258903cd" />
    </div>
  );
};
export default sideBar;
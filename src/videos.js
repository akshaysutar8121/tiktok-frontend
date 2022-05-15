import React from 'react';
import Footer from './footer';
import { useRef, useState } from 'react';

import './videos.css';
import Sidebar from './sidebar';
const videoCompo = ({
  url,
  channel,
  description,
  song,
  shares,
  likes,
  messeges,
}) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const handelVideo = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="contaner">
      <video
        onClick={handelVideo}
        className="video"
        ref={videoRef}
        src={url}
      ></video>
      <Footer
        channel={channel}
        description={description}
        song={song}
      />
      <Sidebar shares={shares} likes={likes} messeges={messeges} />
    </div>
  );
};

export default videoCompo;
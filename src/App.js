import React from 'react';
import './style.css';
import Video from './videos';
import { useEffect, useState } from 'react';
import axios from './axios';
export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/dataApi');

      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  return (
    <div className="app">
      {videos.map((data, idx) => {
        return (
          <Video
            url={data.url}
            messeges={data.messeges}
            description={data.description}
            likes={data.likes}
            song={data.song}
            shares={data.shares}
            channel={data.channel}
          />
        );
      })}
    </div>
  );
}
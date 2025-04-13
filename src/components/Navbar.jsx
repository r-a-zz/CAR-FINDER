import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import musicTracks from '../assets/musicTracks.json';

const Navbar = () => {
  const [currentTrack, setCurrentTrack] = useState(musicTracks[0].url);

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">🚗 Car Finder</h1>
      <div className="w-64">
        <AudioPlayer
          src={currentTrack}
          autoPlay={false}
          controls
        />
      </div>
    </nav>
  );
};

export default Navbar;


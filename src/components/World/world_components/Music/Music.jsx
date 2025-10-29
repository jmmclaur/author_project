//user should be able to upload music
//play/pause/stop/rewind button
//song name and timestamp
//thinking this could appear in a list with the sheet music (protected by copyright)

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import SartoriusTheme from "../../../../../public/audio/SartoriusTheme.mp3"; //module

const Music = ({}) => {
  //logic for how music plays in background vs pressing a button//
  //if playAudio = 1 (true), then set fade = 1 (true)
  //if playAudio = 0 (false), then set fade = 0 (false)
  //if fade = 1, then set volume to 0.0
  //if fade = 0, then set volume to 0.3

  /*
  const audioRef = useRef(null);
  const fadeOutAudio = () => {
    const audio = audioRef.current;
    let volume = audio.volume;

    const fadeOut = setInterval(() => {
      if (volume > 0) {
        volume = Math.max(0, volume - 0.05);
        audio.volume = volume;
      } else {
        clearInterval(fadeOut);
        audio.pause(); //stop audio when volume reaches 0
      }
    }, 100); //interval for smooth fade
  }; */

  return (
    <>
      <Link to="/world" className="world">
        <button className="world_btn">World Building</button>
      </Link>
      <button className="music_btn">Add+</button>
      <h2>Music</h2>

      <ReactAudioPlayer
        src={SartoriusTheme}
        name="audio-player"
        id="audio-player"
        autoPlay
        controls
        type="audio/mp3"
      />
      <button>Fade Out</button>
    </>
  );
};

/*How to add a music player: 
Simple~
1. npm install react-audio-player
2. import ReactAudioPlayer from 'react-audio-player';

function MusicPlayer() {
  return (
    <ReactAudioPlayer
      src="your-audio-file.mp3"
      autoPlay
      controls
    />
  );
}

export default MusicPlayer;

Advanced~this is an older version, won't work w react now 7.17.2025
1. npm install react-sound
2. import Sound from 'react-sound';

function MusicPlayer() {
  return (
    <Sound
      url="your-audio-file.mp3"
      playStatus={Sound.status.PLAYING}
      loop={true}
    />
  );
}

export default MusicPlayer;
*/

export default Music;

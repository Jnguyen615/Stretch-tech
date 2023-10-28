import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AudioPlayer = () => {
  const word = useSelector((state) => state.word.value);
  const audioRef = useRef(null);

  // Use effect is needed to 'reload' the audio element after the state of word changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Reset the audio element
    }
  }, [word]);

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src={`${word.audio}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
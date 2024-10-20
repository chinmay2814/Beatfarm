import React, { useState } from 'react';
import { IconButton, Slider } from '@mui/material';
import { PlayArrow, Pause, VolumeUp } from '@mui/icons-material';

const MusicPlayer = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: '#E8D6C0' }}>
      <IconButton onClick={togglePlay} style={{ color: '#00A4E4' }}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Slider
        value={volume}
        onChange={(e, newValue) => setVolume(newValue)}
        aria-labelledby="volume-slider"
        style={{ color: '#4A3728', width: '100px' }}
      />
      <VolumeUp style={{ color: '#4A3728' }} />
    </div>
  );
};

export default MusicPlayer;

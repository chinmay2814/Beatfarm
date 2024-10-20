import React from 'react';
import { Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import MusicPlayer from '../components/MusicPlayer';

const beatDetails = {
  title: 'Beat 1',
  description: 'This is an amazing beat, perfect for hip hop and pop artists.',
  file: 'beat1.mp3',
  key: 'C Minor',
  bpm: 120
};

const BeatDetailPage = () => {
  const { id } = useParams();

  return (
    <div style={{ backgroundColor: '#F5E6D3', padding: '30px' }}>
      <Typography variant="h2" style={{ color: '#4A3728', fontWeight: 'bold' }}>
        {beatDetails.title}
      </Typography>
      <Typography variant="body1" style={{ color: '#4A3728', marginTop: '10px' }}>
        {beatDetails.description}
      </Typography>
      <Typography variant="body2" style={{ color: '#4A3728', marginTop: '10px' }}>
        Key: {beatDetails.key} | BPM: {beatDetails.bpm}
      </Typography>
      <MusicPlayer track={beatDetails.file} />
      <Button
        variant="contained"
        style={{ backgroundColor: '#00A4E4', color: '#FFFFFF', marginTop: '20px' }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default BeatDetailPage;

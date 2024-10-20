import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import MusicPlayer from '../components/MusicPlayer';

const beats = [
  { id: 1, title: 'Beat 1', description: 'Hot new beat!', file: 'beat1.mp3' },
  { id: 2, title: 'Beat 2', description: 'Smooth and mellow.', file: 'beat2.mp3' },
  { id: 3, title: 'Beat 3', description: 'Hard hitting track.', file: 'beat3.mp3' }
];

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#F5E6D3', padding: '20px' }}>
      <Typography variant="h2" style={{ color: '#4A3728', fontWeight: 'bold' }}>
        FRESH Packs Hot Off The Ranch
      </Typography>
      <Button variant="contained" style={{ backgroundColor: '#00A4E4', color: '#FFFFFF', marginTop: '20px' }}>
        Check Out All Packs
      </Button>
      <Grid container spacing={3} style={{ marginTop: '30px' }}>
        {beats.map((beat) => (
          <Grid item xs={12} md={4} key={beat.id}>
            <div style={{ backgroundColor: '#E8D6C0', padding: '15px', borderRadius: '8px' }}>
              <Typography variant="h6" style={{ color: '#4A3728' }}>
                {beat.title}
              </Typography>
              <Typography variant="body1" style={{ color: '#4A3728' }}>
                {beat.description}
              </Typography>
              <MusicPlayer track={beat.file} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;

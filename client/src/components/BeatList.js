import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import BeatCard from './BeatCard';

function BeatList() {
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    async function fetchBeats() {
      const response = await axios.get('http://localhost:5000/api/beats');
      setBeats(response.data);
    }
    fetchBeats();
  }, []);

  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {beats.map((beat) => (
        <Grid item xs={12} sm={6} md={4} key={beat._id}>
          <BeatCard beat={beat} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BeatList;

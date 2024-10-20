import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function BeatCard({ beat }) {
  return (
    <Card sx={{ backgroundColor: '#E8D6C0' }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>{beat.name}</Typography>
        <Typography variant="body2">Key: {beat.key} | BPM: {beat.bpm}</Typography>
        <Button
          component={Link}
          to={`/beats/${beat._id}`}
          color="secondary"
          sx={{ marginTop: 2 }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default BeatCard;

import React from 'react';
import MapComponent from './MapComponent';
import { Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h2" gutterBottom>
          Google Maps 
        </Typography>
        <Typography variant="body1" paragraph>
          explore the world in an easier and faster way.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <MapComponent />
        </Box>
      </Box>
    </Container>
  );
}

export default App;


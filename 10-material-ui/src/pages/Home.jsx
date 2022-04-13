import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { TourCard } from '../components/TourCard';
import cities from "../data.json";

export const Home = () => {
  return (
    <div className="App">
        <Container sx={{ marginY: 5 }}>
        {
          cities.map((city, upperIndex) => (
            <Box key={upperIndex}>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name} Tours
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map((tour, index) => <TourCard tour={tour} key={index + 0.1}/>)}
              </Grid>
            </Box>
          ))
        }
        </Container>
    </div>
  )
};

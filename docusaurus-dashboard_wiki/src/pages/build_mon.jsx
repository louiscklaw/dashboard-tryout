// http://localhost:3000/up_time_dashboard

import Link from '@docusaurus/Link';
import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { use100vh } from 'react-div-100vh';

import { useEffect } from 'react';
const myJson = {
  Student: { name: 'Jack', email: 'jack@xyz.com' },
  'Student id': 888,
  Sponsors: [
    { name: 'john', email: 'john@@xyz.com' },
    { name: 'jane', email: 'jane@@xyz.com' },
  ],
};

export default function Home() {
  const height_100vh = use100vh();
  const [hko_weather, setHkoWeather] = useState();

  useEffect(() => {
    fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en')
      .then(res => res.json())
      .then(res_json => setHkoWeather(res_json))
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      <Box sx={{ position: 'absolute', bottom: '3vh', left: '3vh' }}>
        <Link to="/">
          <Typography variant="h5">Back</Typography>
        </Link>
      </Box>
      <Grid container sx={{ height: height_100vh }}>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Grid, Stack, Typography } from '@mui/material';
import { use100vh } from 'react-div-100vh';
import ButtonLink from '../../../components/ButtonLink';
import ButtonWithStatus from '../../../components/ButtonWithStatus';

export default function ContainerGrid() {
  const { siteConfig } = useDocusaurusContext();
  const height_100vh = use100vh();
  return (
    <Grid item xs={12} md={1.5}>
      <Stack direction="column" spacing={1}>
        <Typography variant={'h6'} align="center">
          tools
        </Typography>
        <ButtonWithStatus to="http://192.168.10.61:5010" text={'proxy pool'} status_id={42} />
        <pre>curl --proxy 127.0.0.1:5566 https://api.my-ip.io/ip</pre>
        <ButtonLink to="http://192.168.10.61:4445/haproxy?stats" text={'tor proxy 4445'} />
        <ButtonLink to="http://192.168.10.61:8096" text={'mitm proxy 8096'} />
        <ButtonWithStatus to="http://192.168.10.21:6080" text={'android emu 6080'} status_id={49} />
        <ButtonLink to="http://192.168.10.21:6081" text={'android emu 6081'} />
        <ButtonLink to="http://192.168.10.21:6082" text={'android emu 6082'} />
      </Stack>
    </Grid>
  );
}

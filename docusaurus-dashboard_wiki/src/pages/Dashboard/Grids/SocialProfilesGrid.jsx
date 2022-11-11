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
        <Typography variant={'body1'} align="center">
          social Profiles
        </Typography>
        <ButtonWithStatus to="https://google.com/" text={'123'} />
        <ButtonWithStatus to="https://www.carousell.com.hk/u/louiscklaw/" text={'carousel'} />

        <ButtonWithStatus to="http://changedetect.iamon99.com" text={'changedetect'} status_id={17} />
        <ButtonWithStatus to="http://private-changedetect.iamon99.com" text={'privatechange'} status_id={71} />
        <ButtonWithStatus to="http://taobao-changedetect.iamon99.com" text={'taobaochange'} status_id={71} />
        <ButtonWithStatus to="http://carousell-changedetect.iamon99.com" text={'carousellchange'} status_id={71} />
        <ButtonWithStatus
          to="https://console.firebase.google.com/project/dashboard-76c7d/overview"
          text={'firebase console'}
        />
      </Stack>
    </Grid>
  );
}

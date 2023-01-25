import { Button, Grid, Typography, Stack } from '@mui/material';
import React from 'react';

export default function ButtonLink({ to, text, icon, icon_color, text_color, subtitle }) {
  const handleOnClick = () => {
    window.open(to, '_blank');
  };

  return (
    <Button fullWidth onClick={e => handleOnClick(e)} color={'primary'} size="small" sx={{ padding: '0.5rem' }}>
      <Stack>
        <Stack item>
          <Grid container>
            <Grid item xs={12} container>
              <Grid item xs={3} color={icon_color} sx={{}}>
                {icon}
              </Grid>

              <Grid item xs={9} container justifyContent="flex-start" alignItems="center" color={text_color} sx={{}}>
                <Grid item xs={12} container justifyContent="flex-start">
                  <div style={{ fontSize: '1.1em', fontWeight: '500', textTransform: 'uppercase' }}>{text}</div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <div style={{ fontSize: '0.8em', fontWeight: '400', textTransform: 'uppercase' }}>{subtitle}</div>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      {/* 
      <Grid container>
        <Grid item xs={12} container justifyContent="flex-start">
          <div style={{ fontSize: '0.8em', fontWeight: '400', textTransform: 'uppercase' }}>{subtitle}</div>
        </Grid>
      </Grid> 
      */}
    </Button>
  );
}

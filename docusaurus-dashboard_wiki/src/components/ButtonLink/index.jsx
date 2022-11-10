import { Button, Grid } from '@mui/material';
import React from 'react';

export default function ButtonLink({ to, text, icon,  icon_color, text_color }) {
  
  const handleOnClick = () => {
    window.open(to, '_blank');
  };

  return (
    <Button  fullWidth onClick={e => handleOnClick(e)} color={'primary'} size="small" sx={{ padding: '1rem' }}   >
      <Grid container alignItems="flex-start" justifyContent="center" spacing={1}>
        <Grid item xs={3} color={icon_color}>
          {icon}
        </Grid>
        <Grid item xs={9} container justifyContent="flex-start" alignItems="center" color={text_color}>
          <Grid item xs={12} container justifyContent="flex-start">
            <div style={{ fontSize: '1em', fontWeight: '500', textTransform: 'uppercase' }}>{text}</div>
          </Grid>
          <Grid item xs={12} container justifyContent="flex-start">
            <div style={{ fontSize: '0.8em', fontWeight: '400', textTransform: 'uppercase' }}>{text}</div>
          </Grid>
        </Grid>
      </Grid>
    </Button>
  );
}

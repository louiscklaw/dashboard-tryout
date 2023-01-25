import { Button, Grid, Typography, Stack } from '@mui/material';
import React from 'react';

export default function ButtonLink({ to, text, icon, icon_color, text_color, subtitle }) {
  const handleOnClick = () => {
    window.open(to, '_blank');
  };

  return (
    <Button fullWidth onClick={e => handleOnClick(e)} color={'primary'} size="small" sx={{ padding: '0.5rem' }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <div style={{}}>{icon}</div>
          <div style={{ flexGrow: 1 }}>
            <div
              style={{
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                textAlign: 'left',
                fontSize: '1.1em',
                fontWeight: '500',
                textTransform: 'uppercase',
              }}
            >
              {text}
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              textAlign: 'left',
              fontSize: '0.8em',
              fontWeight: '400',
              textTransform: 'uppercase',
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

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

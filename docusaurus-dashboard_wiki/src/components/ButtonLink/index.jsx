import React from 'react'
import { Button, Grid, Typography, Box } from '@mui/material'
import Link from '@docusaurus/Link'
import WysiwygIcon from '@mui/icons-material/Wysiwyg'

export default function ButtonLink({ to, text }) {
  const handleOnClick = () => {
    window.open(to, '_blank')
  }
  return (
    <Button fullWidth onClick={e => handleOnClick(e)} color="secondary" size="small" sx={{ padding: '1rem' }}>
      <Grid container alignItems="flex-start" justifyContent="center" spacing={1}>
        <Grid item xs={3}>
          <WysiwygIcon fontSize="large" />
        </Grid>
        <Grid item xs={9} container justifyContent="flex-start" alignItems="center">
          <Grid item xs={12} container justifyContent="flex-start">
            <div style={{ fontSize: '1em', fontWeight: '500', textTransform: 'uppercase' }}>{text}</div>
          </Grid>
          <Grid item xs={12} container justifyContent="flex-start">
            <div style={{ fontSize: '0.8em', fontWeight: '400', textTransform: 'uppercase' }}>{text}</div>
          </Grid>
        </Grid>
      </Grid>
    </Button>
  )
}

import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Link from '@docusaurus/Link'

export default function ButtonLink({ to, text }) {
  const handleOnClick = () => {
    window.open(to, '_blank')
  }
  return (
    <Button variant="contained" fullWidth onClick={e => handleOnClick(e)}>
      {text}
    </Button>
  )
}

import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Grid, Stack, Typography } from '@mui/material'
import { use100vh } from 'react-div-100vh'
import ButtonLink from '../../../components/ButtonLink'

export default function PrinterGrid() {
  const { siteConfig } = useDocusaurusContext()
  const height_100vh = use100vh()
  return (
    <Grid item xs={12} md={2}>
      <Stack direction="column" spacing={1}>
        <Typography variant={'h6'} align="center">
          Printer
        </Typography>
        <ButtonLink to="http://i3mega.local" text={'i3mega'} />
      </Stack>
    </Grid>
  )
}

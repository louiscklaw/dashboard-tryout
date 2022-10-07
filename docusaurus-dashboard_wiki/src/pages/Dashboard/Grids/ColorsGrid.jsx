import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ButtonLink from '../../../components/ButtonLink'

export default function ColorsGrid() {
  return (
    <Grid item xs={12} md={1.5}>
      <Stack direction="column" spacing={1}>
        <Typography variant={'h6'} align="center">
          Colors
        </Typography>

        <ButtonLink to="https://colorhunt.co/palettes/retro" text={'colorhunt'} />
        <ButtonLink to="https://flatuicolors.com/" text={'flatuicolors'} />
        <ButtonLink to="https://github.com/webkul/coolhue" text={'coolhue'} />
        <ButtonLink to="https://colors.dopely.top/" text={'dopely'} />
        <ButtonLink to="https://www.gradientos.app/" text={'gradientos'} />
        <ButtonLink to="https://brandpalettes.com/" text={'brandpalettes'} />
        <ButtonLink to="http://brandcolors.net/" text={'brandcolors'} />
        <ButtonLink to="https://material.colorion.co/" text={'colorion'} />
        {/* 	docker-rotating-proxy */}
        <ButtonLink to="https://github.com/bradtraversy/design-resources-for-developers/" text={'design-resources-for-developers'} />
      </Stack>
    </Grid>
  )
}

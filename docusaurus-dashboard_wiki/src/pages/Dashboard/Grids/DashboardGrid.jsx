import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Grid, Stack, Typography } from '@mui/material'
import { use100vh } from 'react-div-100vh'
import ButtonLink from '../../../components/ButtonLink'

export default function DashboardGrid() {
  const { siteConfig } = useDocusaurusContext()
  const height_100vh = use100vh()
  return (
    <Grid item xs={12} md={2}>
      <Stack direction="column" spacing={1}>
        <Typography variant={'h6'} align="center">
          Dashboards
        </Typography>

        <ButtonLink to="http://192.168.10.61:8089" text={'checkmk'} />
        <ButtonLink to="http://192.168.10.61:8080/dashboard/" text={'traefik dashboard'} />
        {/* <ButtonLink to="http://192.168.10.61:50080/" text={'Homer dashboard'} /> */}
        <ButtonLink to="http://localhost:8082/" text={'luigi dashboard'} />

        <Typography variant={'h6'} align="center">
          Status
        </Typography>

        <ButtonLink to="http://192.168.10.61:50102/dashboard" text={'uptime kuma'} />
        <ButtonLink to="https://github.com/louiscklaw/routine_check/actions" text={'routine_check'} />
        <ButtonLink to="https://louiscklaw.github.io/upptime-playlist/" text={'upptime'} />
        <ButtonLink to="https://healthcheck.iamon99.com" text={'healthcheck.iamon99.com'} />
      </Stack>
    </Grid>
  )
}

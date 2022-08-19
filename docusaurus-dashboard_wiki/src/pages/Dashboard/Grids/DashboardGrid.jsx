import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Grid, Stack, Typography } from '@mui/material'
import { use100vh } from 'react-div-100vh'
import ButtonLink from '../../../components/ButtonLink'

function ButtonWithStatus(props) {
  let { to, text, status_id } = props

  if (status_id) {
    return (
      <>
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
          <ButtonLink to={to} text={text} />
          <img src={`http://192.168.10.61:50102/api/badge/${status_id}/status?upLabel=up&downLabel=down`} />
        </Stack>
      </>
    )
  }

  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
        <ButtonLink to={to} text={text} />
      </Stack>
    </>
  )
}

export default function DashboardGrid() {
  const { siteConfig } = useDocusaurusContext()
  const height_100vh = use100vh()
  return (
    <Grid item xs={12} md={2}>
      <Stack direction="column" spacing={1}>
        <Typography variant={'h6'} align="center">
          Dashboards
        </Typography>

        <ButtonWithStatus to="http://192.168.10.61:8089" text={'checkmk'} status_id={33} />
        <ButtonWithStatus to="http://192.168.10.61:8080/dashboard" text={'traefik dashboard'} status_id={24} />
        <ButtonWithStatus to="http://192.168.10.61:50080" text={'Homer'} />

        <ButtonWithStatus to="http://localhost:8082" text={'luigi dashboard'} status_id={26} />

        <Typography variant={'h6'} align="center">
          Status
        </Typography>

        <ButtonWithStatus to="http://192.168.10.61:50102/dashboard" text={'uptime kuma'} />
        <ButtonWithStatus to="https://github.com/louiscklaw/routine_check/actions" text={'routine_check/actions'} />
        <ButtonWithStatus to="https://louiscklaw.github.io/upptime-playlist" text={'upptime-playlist'} />
        <ButtonWithStatus to="https://healthcheck.iamon99.com" text={'healthcheck.iamon99.com'} status_id={47} />
      </Stack>
    </Grid>
  )
}

import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Grid, Stack, Typography } from '@mui/material'
import { use100vh } from 'react-div-100vh'
import ButtonLink from '../../../components/ButtonLink'
import ButtonWithStatus from '../../../components/ButtonWithStatus'

export default function ContainerGrid() {
  const { siteConfig } = useDocusaurusContext()
  const height_100vh = use100vh()

  return (
    <Grid item xs={12} md={2}>
      <Stack direction="column" spacing={1}>
        <Typography variant={'h6'} align="center">
          containers
        </Typography>

        <ButtonWithStatus to="http://192.168.10.21:9000" text={'nuc portainer'} status_id={60} />
        <ButtonWithStatus to="http://192.168.10.61:9000" text={'m73 portainer'} status_id={61} />

        <ButtonWithStatus to="http://192.168.10.61:5050" text={'pgadmin'} status_id={10} />
        <ButtonWithStatus to="http://192.168.10.61:9001" text={'questdb'} status_id={62} />
        <ButtonWithStatus to="http://192.168.10.61:8081" text={'phpmyadmin'} status_id={25} />
        <ButtonWithStatus to="https://drone.iamon99.com" text={'drone ci'} status_id={59} />
        <ButtonWithStatus to="http://192.168.10.61:8087" text={'jenkins'} status_id={31} />
        <ButtonWithStatus to="http://192.168.10.61:8086" text={'influxdb'} status_id={30} />
        <ButtonWithStatus to="http://192.168.10.61:8086" text={'appwrite'} status_id={64} />
        <ButtonWithStatus to="http://192.168.10.61:8088" text={'appwrite'} status_id={65} />

        <ButtonWithStatus to="http://192.168.10.61:8093" text={'RethinkDb 8093'} status_id={23} />
        <ButtonWithStatus to="http://192.168.10.61:5678" text={'n8n 5678'} status_id={66} />
        <ButtonWithStatus to="http://192.168.10.61:8095" text={'teedy file sharing'} status_id={57} />
      </Stack>
    </Grid>
  )
}

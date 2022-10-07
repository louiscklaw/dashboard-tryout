{
  /*  */
}
import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Grid, Stack, Typography } from '@mui/material'
import { use100vh } from 'react-div-100vh'
import ButtonLink from '../../../components/ButtonLink'

export default function ContainerGrid() {
  const { siteConfig } = useDocusaurusContext()
  const height_100vh = use100vh()
  return (
    <Grid item xs={12} md={2}>
      <Stack direction="column" spacing={1}>
        <Typography variant={'h6'} align="center">
          notes
        </Typography>
        <ButtonLink to="https://docs.google.com/spreadsheets/d/1nwIj4Jt-LvN-RLqtY2O9Jbe-XsMyVs-04DWGLUPwzEM/edit#gid=0" text={'port schedule'} />

        {/* https://docs.google.com/spreadsheets/d/1jdimi5kt6ZOkYph96k6EpsICYtSJzco6G3WuXQVoF4o/edit */}
        <ButtonLink to="https://docs.google.com/spreadsheets/d/1jdimi5kt6ZOkYph96k6EpsICYtSJzco6G3WuXQVoF4o" text={'taobao worksheet'} />

        {/* https://docs.google.com/spreadsheets/d/1hNURy7NIED8XXQ99tB0bLfmKpdELkRzhXBoHIqjvp0s/edit */}
        <ButtonLink to="https://docs.google.com/spreadsheets/d/1hNURy7NIED8XXQ99tB0bLfmKpdELkRzhXBoHIqjvp0s" text={'password worksheet'} />

        {/* https://louiscklaw.github.io/ */}
        <ButtonLink to="https://louiscklaw.github.io/" text={'https://louiscklaw.github.io/'} />
      </Stack>
    </Grid>
  )
}

import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Grid, Stack, Typography } from '@mui/material'
import { use100vh } from 'react-div-100vh'
import ButtonLink from './ButtonLink'
// import ButtonLink from '../../../components/ButtonLink'

export default function ButtonWithStatus(props) {
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

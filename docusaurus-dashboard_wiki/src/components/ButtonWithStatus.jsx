import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { use100vh } from 'react-div-100vh'
import ButtonLink from './ButtonLink'
// import ButtonLink from '../../../components/ButtonLink'

export default function ButtonWithStatus(props) {
  let { to, text, status_id } = props

  const handleOnClick = () => {
    window.open(`http://192.168.10.61:50102/dashboard/${status_id}`, '_blank')

    // alert('helloworld')
  }

  if (status_id) {
    return (
      <>
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
          <ButtonLink to={to} text={text} />

          <Box onClick={handleOnClick}>
            <img src={`http://192.168.10.61:50102/api/badge/${status_id}/status?upLabel=up&downLabel=down`} />
          </Box>
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

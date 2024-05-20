import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useState } from 'react';

import { Box, Button, createTheme, Grid, Link, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import ButtonWithStatus from '../components/ButtonWithStatus';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { IconButton, InputAdornment } from '@mui/material';

import applications from '../components/links/applications';
import carousell from '../components/links/carousell';
import changedetect from '../components/links/changedetect';
import dashboard from '../components/links/dashboard';
import profile from '../components/links/profile';
import outside_links from '../components/links/outside_links';
import routine_check from '../components/links/routine_check';
import tools from '../components/links/tools';
import worksheets from '../components/links/worksheets';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ButtonWithBadge from '../components/ButtonWithBadge';

import Status from '../components/StatusSection';
import StatusSection from '../components/StatusSection';
import LouiscklawGithubIo from '../components/StatusSection/LouiscklawGithubIo';
import WordpressDemo from '../components/StatusSection/WordpressDemo';
import ChangeDetect from '../components/StatusSection/ChangeDetect';
import InternalTools from '../components/StatusSection/InternalTools';
import PostTestResult from '../components/StatusSection/PostTestResult';
import DemoTestResult from '../components/StatusSection/DemoTestResult';

import { FaFileExcel, FaLink, FaPaintBrush } from 'react-icons/fa';

let n8n_stat_id = 22;

const carousell_configs = [
  profile,
  dashboard,
  applications,
  tools,
  changedetect,
  routine_check,
  carousell,
  outside_links,
  worksheets,
];

function CellPainting() {
  return (
    <Box
      sx={{
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FaPaintBrush fontSize={'3rem'} color={'rgba(0,0,0,0.1)'} />
    </Box>
  );
}

function TestNewHome() {
  let [filter_value, setFilterValue] = React.useState('');

  const handleFilterChange = e => setFilterValue(e.target.value);

  const handleClearSearchFilter = e => setFilterValue('');
  const { colorMode, setColorMode } = useColorMode();
  const theme = createTheme({
    palette: { primary: { main: colorMode == 'light' ? '#2c3e50' : '#95a5a6' }, secondary: { main: '#95a5a6' } },
  });

  let [cellStyle, setCellStyle] = useState({
    padding: '2px',
    width: [
      'calc((100vw - 20px) / 3)',
      'calc((100vw - 20px) / 4)',
      'calc((100vw - 20px) / 6)',
      'calc((100vw - 20px) / 8)',
    ],
    height: 'calc(100vh / 4)',
  });

  let [cellTitleStyle, setCellTitleStyle] = useState({
    fontSize: '0.75rem',
    width: '100%',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  });

  let [cellLinkStyle, setCellLinkStyle] = useState({
    fontSize: '0.9rem',
    width: '100%',
    fontWeight: '500',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.25rem',
  });

  let [emptyCell, setEmptyCell] = useState({
    display: ['none', 'none', 'none', 'block'],
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <StatusSection /> */}

        <Stack direction="row" flexWrap="wrap">
          <Box sx={cellStyle}>
            <Box sx={cellTitleStyle}>1.1 - LouiscklawGithubIo.jsx</Box>
            <LouiscklawGithubIo />
          </Box>
          <Box sx={cellStyle}>
            <Box sx={{ ...cellTitleStyle, display: 'flex', flexDirection: 'row' }}>
              1.2 -
              <a href="//status.iamon99.com/status/portfolio-demo-sites" target="_blank">
                WordpressDemo.jsx
              </a>
            </Box>

            <WordpressDemo />
          </Box>
          <Box sx={cellStyle}>
            <Box sx={cellTitleStyle}>1.3 - change detect</Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <Link href="https://carousell-changedetect.iamon99.com" target="_blank" sx={cellLinkStyle}>
                <img src={`//status.iamon99.com/api/badge/25/status?label=carousell`} />
              </Link>
              <Link href="http://job-changedetect.iamon99.com/" target="_blank" sx={cellLinkStyle}>
                <img src={`//status.iamon99.com/api/badge/24/status?label=job`} />
              </Link>
              <Link href="http://private-changedetect.iamon99.com/" target="_blank" sx={cellLinkStyle}>
                <img src={`//status.iamon99.com/api/badge/5/status?label=private`} />
              </Link>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box sx={{ ...cellTitleStyle }}>
              <Box sx={cellTitleStyle}>1.4 - monitor</Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <Link href="https://status.iamon99.com/status/n8n" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/22/status?label=n8n`} />
                </Link>

                <Link href="http://healthcheck.iamon99.com/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/10/status?label=healthcheck`} />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box sx={cellTitleStyle}>1.5 - PostTestResult.jsx</Box>
            <PostTestResult />
          </Box>
          <Box sx={cellStyle}>
            <Box sx={cellTitleStyle}>1.6 - DemoTestResult.jsx</Box>
            <DemoTestResult />
          </Box>
          <Box sx={{ ...cellStyle }}>
            <Box sx={{ ...cellTitleStyle }}>
              <Box sx={cellTitleStyle}>1.7 - VNC</Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <Link href="http://192.168.10.21:6080/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/77/status?label=vnc_carousell_burn`} />
                </Link>
                <Link href="http://192.168.10.21:6082/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/78/status?label=vnc_coze_poe_seat`} />
                </Link>
                <Link href="http://192.168.10.21:6090/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/79/status?label=vnc_youtube_monitor`} />
                </Link>
                <Link href="http://192.168.10.21:6081/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/80/status?label=vnc_jobsdb`} />
                </Link>
                <Link href="http://192.168.10.21:6091/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/81/status?label=vnc_youtube_upload`} />
                </Link>
                <Link href="http://192.168.10.21:6083/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/82/status?label=vnc_j_m3u8_downloader`} />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              1.8(吉格出租)
              <CellPainting />
            </Box>
          </Box>

          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>2.1 - Social</Box>
              <Link href="https://freehunter.hk/settings" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                freehunter
              </Link>
              <Link href="https://www.hellotoby.com/dashboard/project" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                hellotoby
              </Link>
              <Link href="https://www.fiverr.com/louiscklaw" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                fiverr
              </Link>
              <Link href="https://www.upwork.com/freelancers/settings/contactInfo" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                upwork
              </Link>
              <Link href="https://www.freelancer.com/u/louiscklaw" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                freelancer
              </Link>
              <Link href="https://www.twitch.tv/7goolook" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                twitch
              </Link>
              <Link href="https://www.youtube.com/channel/UCoFP0jiw4HAe6J4iprjcqag" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                youtube
              </Link>
              <Link href="https://www.carousell.com.hk/u/louis_coding" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                carousell
              </Link>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>2.2 - Links/Network</Box>
              <Link href="http://192.168.10.61:9000" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                m73 portainer
              </Link>
              <Link href="https://trello.com/b/JNF4AVto/lynked-insight" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                lynked-insight
              </Link>
              <Link href="http://192.168.10.61:28080" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                traefik dashboard
              </Link>
              <Link href="https://sentry.io/organizations/helloworld-sg/projects" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                sentry
              </Link>
              <Link href="http://192.168.10.61:81/" target="_blank" sx={cellLinkStyle}>
                <img src={`//status.iamon99.com/api/badge/83/status?label=nginx_reverse_proxy`} />
              </Link>
              <Link href="http://www.example.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                (吉link 出租)
              </Link>
              <Link href="http://www.example.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                (吉link 出租)
              </Link>
              <Link href="http://www.example.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                (吉link 出租)
              </Link>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>2.3 - file share</Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <Link href="http://192.168.10.61:8095" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/60/status?label=teedy`} />
                </Link>

                <Link href="http://192.168.10.61:9091" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/61/status?label=torrent`} />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>
                <Link href="https://status.iamon99.com/dashboard" target="_blank" sx={cellLinkStyle}>
                  <FaLink />
                  2.4 - uptime kuma
                </Link>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <Link href="http://192.168.10.21:9000" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/62/status?label=nuc_portainer`} />
                </Link>
                <Link href="http://192.168.10.21:5010/all/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/63/status?label=proxy_pool`} />
                </Link>
                <Link href="http://192.168.10.61:2017" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/67/status?label=v2raya`} />
                </Link>
                <Link href="http://192.168.10.21:50080" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/67/status?label=Homer`} />
                </Link>
                <Link href="http://192.168.10.61:8087" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/64/status?label=jenkins`} />
                </Link>
                <Link href="http://192.168.10.61:8089" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/65/status?label=checkmk`} />
                </Link>
                <Link href="http://192.168.10.61:8093" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/66/status?label=RethinkDB`} />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>2.5 - DB</Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <Link href="http://192.168.10.61:8086" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/69/status?label=influxdb`} />
                </Link>
                <Link href="http://192.168.10.61:8086" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/73/status?label=appwrite`} />
                </Link>
                <Link href="http://192.168.10.61:8081" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/71/status?label=phpmyadmin`} />
                </Link>
                <Link href="http://192.168.10.61:5050" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/72/status?label=pgadmin`} />
                </Link>
                <Link href="http://192.168.10.61:9001" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/74/status?label=questdb`} />
                </Link>
                <Link href="https://pocketbase.iamon99.com/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/47/status?label=pocketbase`} />
                </Link>
                <Link href="http://budibase.iamon99.com/" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/45/status?label=budibase`} />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>2.6 - automation</Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <Link href="https://kestra.iamon99.com" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/49/status?label=kestra`} />
                </Link>
                <Link
                  href="https://www.figma.com/files/recent?fuid=765995386551996371"
                  target="_blank"
                  sx={cellLinkStyle}
                >
                  <FaLink />
                  figma
                </Link>
                <Link
                  href="https://console.firebase.google.com/project/dashboard-76c7d/overview"
                  target="_blank"
                  sx={cellLinkStyle}
                >
                  <FaLink />
                  firebase console
                </Link>

                <Link href="https://drone.iamon99.com" target="_blank" sx={cellLinkStyle}>
                  <FaLink />
                  drone ci
                </Link>
                <Link href="https://healthcheck.iamon99.com" target="_blank" sx={cellLinkStyle}>
                  <FaLink />
                  healthcheck
                </Link>
                <Link href="http://192.168.10.61:4445/haproxy?stats" target="_blank" sx={cellLinkStyle}>
                  <FaLink />
                  haproxy
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>2.7 - object store</Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                <Link href="http://192.168.10.61:9004" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/85/status?label=minio`} />
                </Link>
                <Link
                  href="https://console.firebase.google.com/project/dashboard-76c7d/overview"
                  target="_blank"
                  sx={cellLinkStyle}
                >
                  <FaLink />
                  firebase console
                </Link>

                <Link href="https://drone.iamon99.com" target="_blank" sx={cellLinkStyle}>
                  <FaLink />
                  drone ci
                </Link>
                <Link href="https://healthcheck.iamon99.com" target="_blank" sx={cellLinkStyle}>
                  <FaLink />
                  healthcheck
                </Link>
                <Link href="http://192.168.10.21:6080" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/85/status?label=android_emu_1`} />
                </Link>
                <Link href="http://192.168.10.21:6081" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/85/status?label=android_emu_2`} />
                </Link>
                <Link href="http://192.168.10.21:6082" target="_blank" sx={cellLinkStyle}>
                  <img src={`//status.iamon99.com/api/badge/85/status?label=android_emu_3`} />
                </Link>
                <Link href="http://192.168.10.61:4445/haproxy?stats" target="_blank" sx={cellLinkStyle}>
                  <FaLink />
                  haproxy
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>2.1</Box>
              <Link href="https://github.com/louiscklaw/routine_check/actions" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                routine_check/actions
              </Link>
              <Link href="https://louiscklaw.github.io/upptime-playlist" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                upptime-playlist
              </Link>
              <Link href="http://www.example.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                (吉link 出租)
              </Link>
              <Link href="http://www.example.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                (吉link 出租)
              </Link>
              <Link href="http://www.example.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                (吉link 出租)
              </Link>
              <Link href="http://www.example.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                (吉link 出租)
              </Link>
              <Link href="http://www.example.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                (吉link 出租)
              </Link>
              <Link href="http://www.example.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                (吉link 出租)
              </Link>
            </Box>
          </Box>

          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>3.1 - google sheet</Box>
              <Link
                href="https://docs.google.com/spreadsheets/d/1TGaBTmKhGolKcalNePcAAhq6IHRlWGfbELQQoOMfCvU"
                target="_blank"
                sx={cellLinkStyle}
              >
                <FaFileExcel size="1em" />
                carousell 工作紙
              </Link>
              <Link
                href="https://docs.google.com/spreadsheets/d/1jdimi5kt6ZOkYph96k6EpsICYtSJzco6G3WuXQVoF4o"
                target="_blank"
                sx={cellLinkStyle}
              >
                <FaFileExcel size="1em" />
                淘宝工作紙
              </Link>
              <Link
                href="https://docs.google.com/spreadsheets/d/1n8q-aFic3PKHCBQ-VKpp2NakSmHFbgrHiVrabNTorNg"
                target="_blank"
                sx={cellLinkStyle}
              >
                <FaFileExcel size="1em" />
                支付寳出入數
              </Link>{' '}
              <Link
                href="https://docs.google.com/spreadsheets/d/1nwIj4Jt-LvN-RLqtY2O9Jbe-XsMyVs-04DWGLUPwzEM"
                target="_blank"
                sx={cellLinkStyle}
              >
                <FaFileExcel size="1em" />
                port schedule
              </Link>{' '}
              <Link
                href="https://docs.google.com/spreadsheets/d/1hNURy7NIED8XXQ99tB0bLfmKpdELkRzhXBoHIqjvp0s"
                target="_blank"
                sx={cellLinkStyle}
              >
                <FaFileExcel size="1em" />
                password sheet
              </Link>{' '}
              <Link
                href="https://docs.google.com/spreadsheets/d/1FSF0caQH2GbDivXbFNz2ZBiOUNbvyTAZvxptW6qXDHc"
                target="_blank"
                sx={cellLinkStyle}
              >
                <FaFileExcel size="1em" />
                HKBN sheet
              </Link>{' '}
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>3.2 color - 1</Box>
              <Link href="https://colors.dopely.top" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                dopely
              </Link>
              <Link href="https://colorhunt.co/palettes/retro" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                colorhunt
              </Link>
              <Link href="https://brandpalettes.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                brandpalettes
              </Link>
              <Link href="http://brandcolors.net" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                brandcolors
              </Link>
              <Link href="http://192.168.10.61:8096" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                mitm proxy
              </Link>
              <Link href="http://i3mega.local" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                i3mega
              </Link>
              <Link href="https://flatuicolors.com" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                flatuicolors
              </Link>
            </Box>
          </Box>
          <Box sx={cellStyle}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={cellTitleStyle}>3.3 color - 2</Box>
              <Link href="https://github.com/webkul/coolhue" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                coolhue
              </Link>
              <Link href="https://www.gradientos.app" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                gradientos
              </Link>
              <Link href="https://material.colorion.co" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                colorion
              </Link>
              <Link href="https://mui.com/material-ui/material-icons" target="_blank" sx={cellLinkStyle}>
                <FaLink />
                material icons
              </Link>
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              3.4(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              3.5(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              3.6(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              3.7(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              3.8(吉格出租)
              <CellPainting />
            </Box>
          </Box>

          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              4.1(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              4.2(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              4.3(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              4.4(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              4.5(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              4.6(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              4.7(吉格出租)
              <CellPainting />
            </Box>
          </Box>
          <Box sx={{ ...cellStyle, ...emptyCell }}>
            <Box sx={cellTitleStyle}>
              4.8(吉格出租)
              <CellPainting />
            </Box>
          </Box>
        </Stack>

        <Box style={{ display: 'none' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} container m={2}>
              {carousell_configs.map(link_group => (
                <>
                  <Grid item xs={12} m={2}>
                    <Typography variant={'h5'}>{link_group.title}</Typography>
                  </Grid>

                  <Grid item xs={12} container>
                    {link_group.links.map(link => {
                      if (link?.badge) {
                        return (
                          <>
                            <Grid item xs={6} sm={4} md={3} xl={1.5}>
                              <ButtonWithBadge
                                to={link.to}
                                text={link.text || ''}
                                icon={link.icon || <WysiwygIcon />}
                                subtitle={link.subtitle}
                                badge={link.badge}
                              />
                            </Grid>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <Grid item xs={6} sm={4} md={3} xl={1.5}>
                              <ButtonWithStatus
                                to={link.to}
                                text={link.text || ''}
                                icon={link.icon || <WysiwygIcon />}
                                subtitle={link.subtitle}
                              />
                            </Grid>
                          </>
                        );
                      }
                    })}
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default function NewHome() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        <TestNewHome />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

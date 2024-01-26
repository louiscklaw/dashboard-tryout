import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

import { Box, Button, createTheme, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
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

import PostTestResult from './PostTestResult';
import DemoTestResult from './DemoTestResult';

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

function TestNewHome() {
  let [filter_value, setFilterValue] = React.useState('');

  const handleFilterChange = e => setFilterValue(e.target.value);

  const handleClearSearchFilter = e => setFilterValue('');
  const { colorMode, setColorMode } = useColorMode();
  const theme = createTheme({
    palette: { primary: { main: colorMode == 'light' ? '#2c3e50' : '#95a5a6' }, secondary: { main: '#95a5a6' } },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ margin: '0.5rem' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//status.iamon99.com/status/louiscklaw-github-io"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <div style={{ fontSize: '0.75rem' }}>
                louiscklaw.github.io
              </div>
              <div>
                <img src="//status.iamon99.com/api/badge/2/status?label=homepage" />
              </div>

              <div>
                <img src="//status.iamon99.com/api/badge/13/status?label=upload" />
              </div>

              <div>
                <img src="//status.iamon99.com/api/badge/9/status?label=meet" />
              </div>
            </a>

            <div style={{ margin: '0.5rem' }}>
              <div style={{ fontSize: '0.75rem' }}>
                wordpress demos
              </div>
              <div>
                <img src="//status.iamon99.com/api/badge/36/status?label=mobile_apps_demo" />
              </div>
              <div>
                <img src="//status.iamon99.com/api/badge/26/status?label=relocation_demo" />
              </div>

              <div>
                <img src="//status.iamon99.com/api/badge/35/status?label=company_web_demo" />
              </div>
              <div>
                <img src="//status.iamon99.com/api/badge/34/status?label=freelancer_demo" />
              </div>
              <div>
                <img src="//status.iamon99.com/api/badge/32/status?label=fotop_demo" />
              </div>
              <div>
                <img src="//status.iamon99.com/api/badge/31/status?label=private_tutor_demo" />
              </div>
              <div>
                <img src="//status.iamon99.com/api/badge/33/status?label=interior_design_demo" />
              </div>
              <div>
                <img src="//status.iamon99.com/api/badge/30/status?label=property_agency_demo" />
              </div>
              <div>
                <img src="//status.iamon99.com/api/badge/29/status?label=insurence_agent_demo" />
              </div>

            </div>
          </div>

          <div style={{ margin: '0.5rem' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://private-changedetect.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <div style={{ fontSize: '0.75rem' }}>changedetect</div>
              <div>
                <img src="//status.iamon99.com/api/badge/5/status?label=private" />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://carousell-changedetect.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <div>
                <img src="//status.iamon99.com/api/badge/25/status?label=carousell" />
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://job-changedetect.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <div>
                <img src="//status.iamon99.com/api/badge/24/status?label=job" />
              </div>
            </a>
          </div>

          <div style={{ margin: '0.5rem' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//status.iamon99.com/status/n8n"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <div style={{ fontSize: '0.75rem' }}>n8n</div>
              <div>
                <img src={`//status.iamon99.com/api/badge/${n8n_stat_id}/status?label=homepage`} />
              </div>
            </a>

            <a href="//n8n.iamon99.com" target="_blank">
              <div style={{ fontSize: '0.8rem' }}>n8n.iamon99.com</div>
            </a>
          </div>

          <div>
            <PostTestResult />
          </div>

          <div>
            <DemoTestResult />
          </div>
        </div>
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

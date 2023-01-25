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
        <Grid container spacing={2}>
          <Grid item xs={12} m={4} container justifyContent="center" alignItems="center">
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="search"
                variant="filled"
                color="primary"
                onChange={handleFilterChange}
                value={filter_value}
                sx={{
                  backgroundColor: '#dddddd',
                }}
                InputProps={{
                  endAdornment: (
                    <>
                      <InputAdornment position="end">
                        <IconButton
                          color="primary"
                          aria-label="toggle password visibility"
                          edge="end"
                          onMouseDown={handleClearSearchFilter}
                        >
                          <HighlightOffIcon />
                        </IconButton>
                      </InputAdornment>
                    </>
                  ),
                }}
              />
            </Grid>
          </Grid>

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
                          <Grid item xs={12} sm={1.5}>
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
                          <Grid item xs={12} sm={1.5}>
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

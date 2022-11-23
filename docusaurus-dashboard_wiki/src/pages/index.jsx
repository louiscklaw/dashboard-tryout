import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

import { createTheme, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import ButtonWithStatus from '../components/ButtonWithStatus';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import { IconButton, InputAdornment } from '@mui/material';

import applications from './applications';
import carousell from './carousell';
import changedetect from './changedetect';
import dashboard from './dashboard';
import interest from './interest';
import outside_links from './outside_links';
import routine_check from './routine_check';
import tools from './tools';
import worksheets from './worksheets';

const carousell_configs = [
  interest,
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

  return (
    <>
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
              InputProps={{
                endAdornment: (
                  <>
                    <InputAdornment position="end">
                      <IconButton
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

              {link_group.links.map(link => (
                <>
                  <Grid item xs={3} xl={1.5}>
                    <ButtonWithStatus
                      to={link.to}
                      text={link.text || ''}
                      icon={link.icon || <WysiwygIcon />}
                      subtitle={link.subtitle}
                    />
                  </Grid>
                </>
              ))}
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default function NewHome() {
  const { siteConfig } = useDocusaurusContext();
  const theme = createTheme({ palette: { primary: { main: '#2c3e50' }, secondary: { main: '#7f8c8d' } } });

  return (
    <ThemeProvider theme={theme}>
      <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
        {/* <HomepageHeader /> */}
        <main>
          <TestNewHome />
          {/* <HomepageFeatures /> */}
        </main>
      </Layout>
    </ThemeProvider>
  );
}

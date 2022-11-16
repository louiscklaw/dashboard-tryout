import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import HeroImg from '../../static/img/Hero.jpg';
import styles from './index.module.css';

import { createTheme, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import ButtonWithStatus from '../components/ButtonWithStatus';

import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import PrintIcon from '@mui/icons-material/Print';
import AndroidIcon from '@mui/icons-material/Android';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LanguageIcon from '@mui/icons-material/Language';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputAdornment, IconButton } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import AppsIcon from '@mui/icons-material/Apps';

import { FaBeer, FaJenkins, FaFileExcel } from 'react-icons/fa';

const svgList = [
  {
    title: 'github',
    Svg: require('../../static/img/github.svg').default,
    color: 'black',
    link: 'https://github.com/7Wate/wiki',
  },
  {
    title: 'bilibili',
    Svg: require('../../static/img/bilibili.svg').default,
    link: 'https://space.bilibili.com/223211771',
  },
  {
    title: 'wechat',
    Svg: require('../../static/img/wechat.svg').default,
    color: '#2979ff',
    link: 'https://static.7wate.com/img/2022/06/16/d6dfd36f35293.jpg',
  },
];
const Svg = ({ Svg, color, title, link }) => {
  return (
    <a href={link} target="_blank">
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            🖱Click Here!
          </Link>
        </div>
      </div>
    </header>
  );
}

function MyHero() {
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <button>helloworld</button>
        <h1 className={styles.leftContainer_h1}>
          Always <br /> For Freedom.
        </h1>
        <p className={styles.leftContainer_p}>
          一个喜欢异想天开的家伙 💨
          <br />
          在这里记录知识，希望对你也有帮助。
        </p>
        <div className={styles.buttonContainer}>
          {/* <button className={styles.button}>
            <a className={styles.hero_a} href='/'>
              Click
            </a>
          </button>
          <span className={styles.buttonLeftText}>
            Get Started. <br /> 开启学习之旅.
          </span> */}
          <div className={styles.svgContainer}>
            {svgList.map((item, index) => {
              return <Svg {...item} key={item.title} />;
            })}
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  );
}

const category_configs = [
  {
    text: 'carousell?',
    button_configs: [
      {
        to: 'https://www.carousell.com.hk/u/louiscklaw/',
        text: 'changedetect',
        status_id: 17,
        icon_color: '#800000',
        text_color: '#800000',
      },
    ],
  },
  {
    text: 'category2',
  },
];

// https://mui.com/material-ui/material-icons
const button_configs = [
  {
    to: 'https://www.carousell.com.hk/u/louiscklaw/',
    text: 'changedetect',
    status_id: 17,
    icon_color: '#800000',
    text_color: '#800000',
  },

  {
    to: 'https://trello.com/b/JNF4AVto/lynked-insight/',
    text: 'lynked - kanban',
    status_id: 17,
    icon_color: '#800000',
    text_color: '#800000',
  },

  {
    to: 'https://louiscklaw.atlassian.net/jira/software/projects/CSELL/boards/1',
    text: 'carousell - jira',
    subtitle: 'jira',
    status_id: 17,
    icon_color: '#800000',
    text_color: '#800000',
  },

  { to: 'https://freehunter.hk/settings', text: 'freehunter', status_id: 17 },
  { to: 'https://www.hellotoby.com/dashboard/project', text: 'hellotoby', status_id: 17 },

  // carousell-playlist
  {
    to: 'https://louiscklaw.github.io/carousell-playlist/search-scan.html',
    text: 'carousell test result',
    status_id: 17,
  },

  {
    to: 'http://192.168.10.21:6080',
    text: 'android emu 6080',
    status_id: 49,
    icon: <PhoneAndroidIcon />,
    tags: 'android',
  },
  { to: 'http://192.168.10.21:9000', text: 'nuc portainer', status_id: 60, icon: <DashboardIcon />, tags: 'portainer' },
  { to: 'http://192.168.10.61:50080', text: 'Homer' },
  { to: 'http://192.168.10.61:5010', text: 'proxy pool', status_id: 42, icon: <AppsIcon /> },
  { to: 'http://192.168.10.61:50102/dashboard', text: 'uptime kuma' },
  { to: 'http://192.168.10.61:5050', text: 'pgadmin', status_id: 10, icon: <StorageIcon />, tags: 'db database' },
  { to: 'http://192.168.10.61:5678', text: 'n8n 5678', status_id: 66 },
  { to: 'http://192.168.10.61:8081', text: 'phpmyadmin', status_id: 25, icon: <StorageIcon />, tags: 'db database' },
  { to: 'http://192.168.10.61:8086', text: 'appwrite', status_id: 64, icon: <AppsIcon /> },
  { to: 'http://192.168.10.61:8086', text: 'influxdb', status_id: 30, icon: <StorageIcon />, tags: 'db database' },
  { to: 'http://192.168.10.61:8087', text: 'jenkins', status_id: 31, tags: 'ci', icon: <FaJenkins size="2em" /> },
  { to: 'http://192.168.10.61:8088', text: 'appwrite', status_id: 65 },
  { to: 'http://192.168.10.61:8089', text: 'checkmk', status_id: 33, tags: 'checkmk check', icon: <AppsIcon /> },
  {
    to: 'http://192.168.10.61:8093',
    text: 'RethinkDb 8093',
    status_id: 23,
    tags: 'db database',
    icon: <StorageIcon />,
  },
  { to: 'http://192.168.10.61:8095', text: 'teedy file sharing', status_id: 57, icon: <StorageIcon /> },
  { to: 'http://192.168.10.61:9000', text: 'm73 portainer', status_id: 61, icon: <DashboardIcon /> },
  { to: 'http://192.168.10.61:9001', text: 'questdb', status_id: 62, icon: <StorageIcon />, tags: 'db database' },
  { to: 'http://192.168.10.61:9091', text: 'torrent', status_id: 75 },
  {
    to: 'http://carousell-changedetect.iamon99.com',
    text: 'carousellchange',
    status_id: 71,
    tags: 'chagedetect',
    icon: <LanguageIcon />,
  },
  { to: 'http://localhost:8082', text: 'luigi dashboard', status_id: 26 },
  {
    to: 'http://private-changedetect.iamon99.com',
    text: 'privatechange',
    status_id: 71,
    tags: 'chagedetect',
    icon: <LanguageIcon />,
  },
  {
    to: 'http://taobao-changedetect.iamon99.com',
    text: 'taobaochange',
    status_id: 71,
    tags: 'chagedetect',
    icon: <LanguageIcon />,
  },
  { to: 'https://console.firebase.google.com/project/dashboard-76c7d/overview', text: 'firebase console' },
  { to: 'https://drone.iamon99.com', text: 'drone ci', status_id: 59 },
  { to: 'https://github.com/louiscklaw/routine_check/actions', text: 'routine_check/actions', tags: 'check' },
  { to: 'https://healthcheck.iamon99.com', text: 'healthcheck.iamon99.com', status_id: 47 },
  { to: 'https://louiscklaw.github.io/upptime-playlist', text: 'upptime-playlist', status_id: 48 },

  { to: 'http://192.168.10.21:6081', text: 'android emu 6081', icon: <PhoneAndroidIcon /> },
  { to: 'http://192.168.10.21:6082', text: 'android emu 6082', icon: <PhoneAndroidIcon /> },
  { to: 'http://192.168.10.61:4445/haproxy?stats', text: 'tor proxy 4445' },
  { to: 'http://192.168.10.61:8096', text: 'mitm proxy 8096' },
  { to: 'http://brandcolors.net/', text: 'brandcolors' },
  { to: 'http://i3mega.local', text: 'i3mega', icon: <PrintIcon />, tags: 'printer' },
  { to: 'https://aboutme.louislabs.com/', text: 'aboutme.louislabs.com' },
  { to: 'https://brandpalettes.com/', text: 'brandpalettes' },
  { to: 'https://colorhunt.co/palettes/retro', text: 'colorhunt' },
  { to: 'https://colors.dopely.top/', text: 'dopely' },
  { to: 'https://docs.google.com/spreadsheets/d/1hNURy7NIED8XXQ99tB0bLfmKpdELkRzhXBoHIqjvp0s', text: 'password sheet' },
  {
    to: 'https://docs.google.com/spreadsheets/d/1jdimi5kt6ZOkYph96k6EpsICYtSJzco6G3WuXQVoF4o',
    text: '淘宝工作紙',
    icon: <FaFileExcel size="2em" />,
  },
  {
    to: 'https://docs.google.com/spreadsheets/d/1nwIj4Jt-LvN-RLqtY2O9Jbe-XsMyVs-04DWGLUPwzEM/edit#gid=0',
    text: 'port schedule',
  },
  {
    to: 'https://docs.google.com/spreadsheets/d/1TGaBTmKhGolKcalNePcAAhq6IHRlWGfbELQQoOMfCvU',
    text: 'carousell 工作紙',
    icon: <FaFileExcel size="2em" />,
  },

  {
    to: 'https://docs.google.com/spreadsheets/d/1n8q-aFic3PKHCBQ-VKpp2NakSmHFbgrHiVrabNTorNg',
    text: '支付寳出入數',
    icon: <FaFileExcel size="2em" />,
  },
  { to: 'https://flatuicolors.com/', text: 'flatuicolors' },
  { to: 'https://github.com/webkul/coolhue', text: 'coolhue' },
  { to: 'https://louiscklaw.github.io/', text: 'louiscklaw.github.io' },
  { to: 'https://material.colorion.co/', text: 'colorion' },
  { to: 'https://www.gradientos.app/', text: 'gradientos' },
  { to: 'https://github.com/louiscklaw/dashboard-tryout/', text: 'louiscklaw/dashboard-tryout', icon: <GitHubIcon /> },
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
          {button_configs
            .filter(
              d =>
                Object.keys(d)
                  .map(k => {
                    if (['status_id'].indexOf(k) > -1) return false;
                    if (['icon'].indexOf(k) > -1) return false;
                    return d[k].search(filter_value) > -1;
                  })
                  .indexOf(true) > -1,
            )
            .sort()
            .map(button_config => (
              <>
                <Grid item xs={3} xl={1.5}>
                  <ButtonWithStatus
                    to={button_config.to}
                    text={button_config.text}
                    status_id={button_config.status_id}
                    icon={button_config.icon ? button_config.icon : <WysiwygIcon />}
                    icon_color={button_config?.icon_color ? button_config.icon_color : '#050505'}
                    text_color={button_config?.text_color ? button_config.text_color : '#050505'}
                    subtitle={button_config?.subtitle ? button_config.subtitle : ''}
                  />
                </Grid>
              </>
            ))}
        </Grid>

        <Grid item xs={12} container m={2}>
          <Grid item xs={12} m={2}>
            <Typography variant={'h5'}>Carousell</Typography>
          </Grid>
          <Grid item container xs={12} m={2}>
            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to={'button_config.to'} text={'testing'} icon={<WysiwygIcon />} subtitle={'subtitle'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to={'button_config.to'} text={'testing'} icon={<WysiwygIcon />} subtitle={'subtitle'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to={'button_config.to'} text={'testing'} icon={<WysiwygIcon />} subtitle={'subtitle'} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title="Home"
      description="Wiki知识库/vscode/javascript/软件/工具"
    >
      {/* <HomepageHeader /> */}
      <main>
        {/* <MyHero /> */}

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
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

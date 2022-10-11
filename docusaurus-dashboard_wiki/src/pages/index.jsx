import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import Head from '@docusaurus/Head'
import HeroImg from '../../static/img/Hero.jpg'
import SocialProfiles from './Dashboard/Grids/SocialProfilesGrid'
import Dashboard from './Dashboard/Grids/DashboardGrid'
import Container from './Dashboard/Grids/ContainerGrid.jsx'
import Tools from './Dashboard/Grids/ToolsGrid.jsx'
import Notes from './Dashboard/Grids/NotesGrid.jsx'
import Printers from './Dashboard/Grids/PrinterGrid'

import { Typography, Box, Button, createTheme, Grid, ThemeProvider } from '@mui/material'
import ColorsGrid from './Dashboard/Grids/ColorsGrid'
import ButtonWithStatus from '../components/ButtonWithStatus'
import ButtonLink from '../components/ButtonLink'

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
]
const Svg = ({ Svg, color, title, link }) => {
  return (
    <a href={link} target="_blank">
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
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
  )
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
              return <Svg {...item} key={item.title} />
            })}
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  )
}

function TestNewHome() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} container m={2}>
          <Grid item xs={12} container>
            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="https://www.carousell.com.hk/u/louiscklaw/" text={'carousel'} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://changedetect.iamon99.com" text={'changedetect'} status_id={17} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://private-changedetect.iamon99.com" text={'privatechange'} status_id={71} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://taobao-changedetect.iamon99.com" text={'taobaochange'} status_id={71} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://carousell-changedetect.iamon99.com" text={'carousellchange'} status_id={71} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="https://console.firebase.google.com/project/dashboard-76c7d/overview" text={'firebase console'} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:8089" text={'checkmk'} status_id={33} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:50080" text={'Homer'} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:9091" text={'torrent'} status_id={75} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://localhost:8082" text={'luigi dashboard'} status_id={26} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:50102/dashboard" text={'uptime kuma'} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="https://github.com/louiscklaw/routine_check/actions" text={'routine_check/actions'} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="https://louiscklaw.github.io/upptime-playlist" text={'upptime-playlist'} status_id={48} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="https://healthcheck.iamon99.com" text={'healthcheck.iamon99.com'} status_id={47} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.21:9000" text={'nuc portainer'} status_id={60} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:9000" text={'m73 portainer'} status_id={61} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:5050" text={'pgadmin'} status_id={10} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:9001" text={'questdb'} status_id={62} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:8081" text={'phpmyadmin'} status_id={25} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="https://drone.iamon99.com" text={'drone ci'} status_id={59} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:8087" text={'jenkins'} status_id={31} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:8086" text={'influxdb'} status_id={30} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:8086" text={'appwrite'} status_id={64} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:8088" text={'appwrite'} status_id={65} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:8093" text={'RethinkDb 8093'} status_id={23} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:5678" text={'n8n 5678'} status_id={66} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:8095" text={'teedy file sharing'} status_id={57} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.61:5010" text={'proxy pool'} status_id={42} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="http://192.168.10.61:4445/haproxy?stats" text={'tor proxy 4445'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="http://192.168.10.61:8096" text={'mitm proxy 8096'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonWithStatus to="http://192.168.10.21:6080" text={'android emu 6080'} status_id={49} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="http://192.168.10.21:6081" text={'android emu 6081'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="http://192.168.10.21:6082" text={'android emu 6082'} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://docs.google.com/spreadsheets/d/1nwIj4Jt-LvN-RLqtY2O9Jbe-XsMyVs-04DWGLUPwzEM/edit#gid=0" text={'port schedule'} />
            </Grid>

            {/* https://docs.google.com/spreadsheets/d/1jdimi5kt6ZOkYph96k6EpsICYtSJzco6G3WuXQVoF4o/edit */}
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://docs.google.com/spreadsheets/d/1jdimi5kt6ZOkYph96k6EpsICYtSJzco6G3WuXQVoF4o" text={'taobao sheet'} />
            </Grid>

            {/* https://docs.google.com/spreadsheets/d/1hNURy7NIED8XXQ99tB0bLfmKpdELkRzhXBoHIqjvp0s/edit */}
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://docs.google.com/spreadsheets/d/1hNURy7NIED8XXQ99tB0bLfmKpdELkRzhXBoHIqjvp0s" text={'password sheet'} />
            </Grid>

            {/* https://louiscklaw.github.io/ */}
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://louiscklaw.github.io/" text={'louiscklaw.github.io'} />
            </Grid>

            {/* https://aboutme.louislabs.com/ */}
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://aboutme.louislabs.com/" text={'aboutme.louislabs.com'} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="http://i3mega.local" text={'i3mega'} />
            </Grid>

            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://colorhunt.co/palettes/retro" text={'colorhunt'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://flatuicolors.com/" text={'flatuicolors'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://github.com/webkul/coolhue" text={'coolhue'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://colors.dopely.top/" text={'dopely'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://www.gradientos.app/" text={'gradientos'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://brandpalettes.com/" text={'brandpalettes'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="http://brandcolors.net/" text={'brandcolors'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://material.colorion.co/" text={'colorion'} />
            </Grid>
            <Grid item xs={3} xl={1.5}>
              <ButtonLink to="https://github.com/bradtraversy/design-resources-for-developers/" text={'design-resources-for-developers'} />
            </Grid>

            {/* 
              <Box style={{ display: 'none' }}>
                <SocialProfiles />
                <Dashboard />
                <Container />
                <Tools />
                <Notes />
                <Printers />
              </Box> 
            */}
            {/* <ColorsGrid /> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

function Home() {
  const { siteConfig } = useDocusaurusContext()
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
  )
}

export default function NewHome() {
  const { siteConfig } = useDocusaurusContext()
  const theme = createTheme({
    palette: { primary: { main: '#2c3e50' }, secondary: { main: '#7f8c8d' } },
  })

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
  )
}

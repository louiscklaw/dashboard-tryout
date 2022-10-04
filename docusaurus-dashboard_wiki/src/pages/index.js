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

import { Box, Button, createTheme, Grid, ThemeProvider } from '@mui/material'
import ColorsGrid from './Dashboard/Grids/ColorsGrid'

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
    <Grid container spacing={2} p={{ md: '5rem' }}>
      <SocialProfiles />
      <Dashboard />
      <Container />
      <Tools />
      <Notes />
      <Printers />
      <ColorsGrid />
    </Grid>
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

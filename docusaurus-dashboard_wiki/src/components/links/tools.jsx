import React from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import StorageIcon from '@mui/icons-material/Storage';

import AppsIcon from '@mui/icons-material/Apps';

import { FaJenkins, FaDatabase } from 'react-icons/fa';

export default {
  title: 'tools',
  links: [
    {
      to: 'http://192.168.10.21:9000',
      text: 'nuc portainer',
      subtitle: 'nuc portainer',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <DashboardIcon />,
    },
    {
      to: 'http://192.168.10.61:5010',
      text: 'proxy pool',
      subtitle: 'proxy pool',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <AppsIcon />,
    },
    {
      to: 'https://status.iamon99.com/dashboard',
      text: 'uptime kuma',
      subtitle: 'uptime kuma',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <AppsIcon />,
    },
    {
      to: 'http://192.168.10.21:50080',
      text: 'Homer',
      subtitle: 'Homer',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <DashboardIcon />,
    },
    {
      to: 'http://192.168.10.61:8087',
      text: 'jenkins',
      subtitle: 'jenkins',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <FaJenkins size="2em" />,
    },
    {
      to: 'http://192.168.10.61:8089',
      text: 'checkmk',
      subtitle: 'checkmk',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <AppsIcon />,
    },

    {
      to: 'http://192.168.10.61:8093',
      text: 'RethinkDb',
      subtitle: '8093',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
      tags: 'db database',
    },
    {
      to: 'http://192.168.10.61:8086',
      text: 'influxdb',
      subtitle: '',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
      tags: 'db database',
    },
    {
      to: 'http://192.168.10.61:8086',
      text: 'appwrite',
      subtitle: '',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
    },
    {
      to: 'http://192.168.10.61:8081',
      text: 'phpmyadmin',
      subtitle: '',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
    },
    {
      to: 'http://192.168.10.61:5050',
      text: 'pgadmin',
      subtitle: '',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
    },
    {
      to: 'http://192.168.10.61:5678',
      text: 'n8n ',
      subtitle: 'port 5678',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
    },
    {
      to: 'http://192.168.10.61:8088',
      text: 'appwrite',
      subtitle: 'port 8088',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
    },
    {
      to: 'http://192.168.10.61:9001',
      text: 'questdb',
      subtitle: 'port 9001',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
    },
    {
      to: 'https://www.figma.com/files/recent?fuid=765995386551996371',
      text: 'figma',
      subtitle: 'figma.com',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
    },
    {
      to: 'https://console.firebase.google.com/project/dashboard-76c7d/overview',
      text: 'firebase console',
      subtitle: 'console.firebase.google.com',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
    },
    {
      to: 'http://192.168.10.21:6080',
      text: 'android emu',
      subtitle: '6080',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <PhoneAndroidIcon />,
    },
    {
      to: 'https://drone.iamon99.com',
      text: 'drone ci',
      subtitle: '',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <PhoneAndroidIcon />,
    },
    {
      to: 'https://healthcheck.iamon99.com',
      text: 'healthcheck',
      subtitle: 'healthcheck.iamon99.com',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <PhoneAndroidIcon />,
    },
    {
      to: 'http://192.168.10.21:6081',
      text: 'android emu',
      subtitle: '6081',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <PhoneAndroidIcon />,
    },
    {
      to: 'http://192.168.10.21:6082',
      text: 'android emu',
      subtitle: '6082',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <PhoneAndroidIcon />,
    },
    {
      to: 'http://192.168.10.61:4445/haproxy?stats',
      text: 'haproxy',
      subtitle: 'tor proxy 4445',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <PhoneAndroidIcon />,
    },
    {
      to: 'http://192.168.10.61:9004/',
      text: 'minio',
      subtitle: 'tor proxy 4445',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <FaDatabase />,
    },
  ],
};

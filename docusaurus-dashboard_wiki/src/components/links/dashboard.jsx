import React from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';

export default {
  title: 'dashbaord',
  links: [
    {
      to: 'http://192.168.10.61:9000',
      text: 'm73 portainer',
      subtitle: 'm73 portainer',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <DashboardIcon />,
    },

    {
      to: 'https://trello.com/b/JNF4AVto/lynked-insight',
      text: 'lynked-insight',
      subtitle: '',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
    },
  ],
};

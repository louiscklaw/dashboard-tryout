import React from 'react';

import StorageIcon from '@mui/icons-material/Storage';

export default {
  title: 'applications',
  links: [
    {
      to: 'http://192.168.10.61:8095',
      text: 'teedy',
      subtitle: 'file sharing',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <StorageIcon />,
    },

    {
      to: 'http://192.168.10.61:9091',
      text: 'torrent',
      subtitle: '',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
    },

  ],
};

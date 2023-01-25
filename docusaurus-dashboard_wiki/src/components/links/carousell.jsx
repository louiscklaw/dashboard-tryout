import React from 'react';

import WysiwygIcon from '@mui/icons-material/Wysiwyg';

export default {
  title: 'carousell 123321',
  links: [
    {
      to: 'https://www.carousell.com.hk/u/louiscklaw/',
      text: 'my-carousell',
      subtitle: 'my carousell profile',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      icon: <WysiwygIcon />,
    },

    {
      to: 'https://louiscklaw.atlassian.net/jira/software/projects/CSELL/boards/1',
      text: 'carousell - jira',
      subtitle: 'jira',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
    },
    {
      to: 'https://louiscklaw.github.io/carousell-playlist/search-scan.html',
      text: 'carousell test result',
      subtitle: '',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
      badge: 'https://github.com/louiscklaw/carousell-playlist/actions/workflows/product-exercise.yml/badge.svg',
    },
    {
      to: 'https://trends.google.com/trends/trendingsearches/daily?geo=HK',
      text: 'google search trend',
      subtitle: '',
      status_id: 17,
      icon_color: '#800000',
      text_color: '#800000',
    },
  ],
};

import React from 'react';

export default () => {
  return (
    <>
      <div style={{ minWidth: '8rem', maxWidth: '10vw', padding: '0 0.1rem' }}>
        <div style={{}}>
          <div
            style={{
              fontSize: '0.75rem',
              width: '100%',
              fontWeight: 'bold',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <a href="//status.iamon99.com/status/portfolio-demo-sites" target="_blank">
              WordpressDemo.jsx
            </a>
          </div>
          <div style={{ paddingTop: '0.1rem', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//mobile_apps_demo.louislabs.com/"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <img src="//status.iamon99.com/api/badge/36/status?label=mobile_apps_demo" />
            </a>
          </div>

          <div style={{ paddingTop: '0.1rem', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://emall.iamon99.com/"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <img src="https://status.iamon99.com/api/badge/52/status?label=emall.iamon99.com" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

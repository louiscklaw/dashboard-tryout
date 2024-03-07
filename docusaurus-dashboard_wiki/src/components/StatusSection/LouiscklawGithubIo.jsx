import React from 'react';

export default () => {
  return (
    <>
      <div style={{ width: '10vw' }}>
        <div>
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
            louiscklaw.github.io
          </div>
          <div style={{ paddingTop: '0.1rem', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//louiscklaw.github.io/"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <img src="//status.iamon99.com/api/badge/2/status?label=louiscklaw.github.io" />
            </a>
          </div>
          <div style={{ paddingTop: '0.1rem', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//share-staging.louislabs.com/upload"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <img src="//status.iamon99.com/api/badge/38/status?label=share-staging.louislabs.com" />
            </a>
          </div>

          <div style={{ paddingTop: '0.1rem', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//meet.louislabs.com/"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <img src="//status.iamon99.com/api/badge/9/status?label=meet" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

import React from 'react';

export default () => {
  return (
    <>
      <div style={{ width: '10vw' }}>
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
            change detect
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://carousell-changedetect.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src="//status.iamon99.com/api/badge/25/status?label=carousell-changedetect" />
              </div>
            </a>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://job-changedetect.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src="//status.iamon99.com/api/badge/24/status?label=job-changedetect" />
              </div>
            </a>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://private-changedetect.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src="//status.iamon99.com/api/badge/5/status?label=private-changedetect" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

import React from 'react';

export default () => {
  return (
    <>
      <div style={{ minWidth: '8rem', maxWidth: '10vw', padding: '0 0.1rem' }}>
        <div style={{}}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://carousell-changedetect.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
            >
              <div>
                <img src="//status.iamon99.com/api/badge/25/status?label=carousell" />
              </div>
            </a>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://job-changedetect.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
            >
              <div>
                <img src="//status.iamon99.com/api/badge/24/status?label=job" />
              </div>
            </a>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://private-changedetect.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
            >
              <div>
                <img src="//status.iamon99.com/api/badge/5/status?label=private" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

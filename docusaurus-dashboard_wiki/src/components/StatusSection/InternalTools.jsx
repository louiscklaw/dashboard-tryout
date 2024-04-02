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
            InternalTools.jsx
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//status.iamon99.com/status/n8n"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src={`//status.iamon99.com/api/badge/22/status?label=n8n`} />
              </div>
            </a>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//budibase.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src={`//status.iamon99.com/api/badge/45/status?label=budibase`} />
              </div>
            </a>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//healthcheck.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src={`//status.iamon99.com/api/badge/10/status?label=healthcheck`} />
              </div>
            </a>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.carousell.com.hk"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src={`//status.iamon99.com/api/badge/20/status?label=carousell.com.hk`} />
              </div>
            </a>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//pocketbase.iamon99.com/_/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src={`//status.iamon99.com/api/badge/47/status?label=pocketbase`} />
              </div>
            </a>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kestra.iamon99.com/"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src={`//status.iamon99.com/api/badge/49/status?label=kestra`} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

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
            n8n
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="//status.iamon99.com/status/n8n"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
            >
              <div>
                <img src={`//status.iamon99.com/api/badge/22/status?label=n8n.iamon99.com`} />
              </div>
            </a>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <a href="//n8n.iamon99.com" target="_blank">
              <div style={{ fontSize: '0.8rem' }}>n8n.iamon99.com</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

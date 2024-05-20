import React from 'react';

export default () => {
  var [last_update, setLastUpdate] = React.useState('');
  var [demo_devias_material_kit_pro_react, setDemoDeviasMaterialKitProReact] = React.useState('');

  return (
    <>
      <div style={{ minWidth: '8rem', maxWidth: '10vw', padding: '0 0.1rem' }}>
        <div style={{ fontSize: '0.75rem' }}>
          <div>{last_update}</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <div>iamon99.com</div>

            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//demo-nextjs.iamon99.com/"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <img src="//status.iamon99.com/api/badge/21/status?label=demo-nextjs" />
              </a>
            </div>

            <div>louislabs.com</div>

            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//demo-nextjs-dashboard.louislabs.com/"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <img src="//status.iamon99.com/api/badge/53/status?label=demo-nextjs-dashboard" />
              </a>
            </div>

            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//ionic-demo.louislabs.com/"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <img src="//status.iamon99.com/api/badge/54/status?label=ionic-demo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

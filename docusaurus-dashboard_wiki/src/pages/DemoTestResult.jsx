import React from 'react';

export default () => {
  var [last_update, setLastUpdate] = React.useState('');
  var [demo_devias_material_kit_pro_react, setDemoDeviasMaterialKitProReact] = React.useState('');

  return (
    <>
      <div style={{ fontSize: '0.75rem' }}>
        <div>post test result:</div>
        <div>{last_update}</div>

        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="//demo-nextjs.iamon99.com/"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <img src="//status.iamon99.com/api/badge/21/status?label=demo-nextjs.iamon99.com" />
          </a>
        </div>
      </div>
    </>
  );
};

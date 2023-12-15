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
          <img src="https://status.iamon99.com/api/badge/21/status?label=demo-react" />
        </div>
      </div>
    </>
  );
};

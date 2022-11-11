import React from 'react';
import ButtonLink from './ButtonLink';
// import ButtonLink from '../../../components/ButtonLink'

export default function ButtonWithStatus(props) {
  let { to, text, status_id, icon, icon_color, text_color } = props;

  return (
    <>
      <ButtonLink to={to} text={text} icon={icon} icon_color={icon_color} text_color={text_color} />

      {/* 
        <Box onClick={handleOnClick}>
          <img src={`https://status.iamon99.com/api/badge/${status_id}/status`} />
        </Box> 
      */}
    </>
  );
}

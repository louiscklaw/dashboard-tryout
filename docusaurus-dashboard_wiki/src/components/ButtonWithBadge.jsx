import React from 'react';
import ButtonLink from './ButtonLink';
import ButtonLinkWithBadge from './ButtonLinkWithBadge';
// import ButtonLink from '../../../components/ButtonLink'

export default function ButtonWithBadge(props) {
  let { to, text, status_id, icon, icon_color, text_color, subtitle,badge  } = props;

  return (
    <>
      <ButtonLinkWithBadge badge={badge} to={to} text={text} icon={icon} icon_color={icon_color} text_color={text_color} subtitle={subtitle} />

      {/* 
        <Box onClick={handleOnClick}>
          <img src={`https://status.iamon99.com/api/badge/${status_id}/status`} />
        </Box> 
      */}
    </>
  );
}

import React from 'react';
import PropTypes from 'prop-types';

export default function Banner(props) {
  const { img, href } = props;
  return (
    <>
      <a href={href}>
        <img src={img} alt='Banner' />
      </a>
    </>
  );
}

Banner.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Tiser(props) {
  const {
    href,
    title,
    text,
  } = props;

  return (
    <>
      <a href={href}>
        <h2>{title}</h2>
      </a>
      <span>{text}</span>
    </>
  );
}

Tiser.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Button = (props) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    props.onClick(props.value);
  };

  return (
    <button
      className={`${styles.button} ${styles.ripple}`}
      onClick={handleButtonClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  style: {},
  className: '',
  value: null,
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func,
  style: PropTypes.object,
};
export default Button;

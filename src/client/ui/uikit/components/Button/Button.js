import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Button = (props) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    props.onClick(props.value);
  };

  const defaultStyle = `${styles.button} ${styles.ripple}`;
  return (
    <button
      className={`${defaultStyle} ${props.className ? props.className : ''}`}
      onClick={handleButtonClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  className: '',
  value: null,
};

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func,
};
export default Button;

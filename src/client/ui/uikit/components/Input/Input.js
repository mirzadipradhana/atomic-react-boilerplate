import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Input = (props) => {
  const defaultStyle = `${styles.input}`;
  return (
    <input
      type="text"
      className={`${defaultStyle} ${props.className ? props.className : ''}`}
      placeholder={props.placeholder}
      style={props.style}
    />
  );
};

Input.defaultProps = {
  children: 'Input',
  onClick: () => {},
  className: '',
  placeholder: '',
  value: null,
  style: {},
};

Input.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func,
  style: PropTypes.object,
};
export default Input;

import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';
import defaultImgBrand from './images/logo-default.png';

const Brand = ({ brandName, brandImage }) => {
  const imgBrand = brandImage ? brandImage : defaultImgBrand;

  return (
    <ul className={styles.root}>
      <li className={styles.brandImage}><img src={imgBrand} alt="logo" /></li>
      <li className={styles.brandName}><span>{brandName}</span></li>
    </ul>
  );
};

Brand.propTypes = {
  brandName: PropTypes.string,
  brandImage: PropTypes.string,
};

export default Brand;

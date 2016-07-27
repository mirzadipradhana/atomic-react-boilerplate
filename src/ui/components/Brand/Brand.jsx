import React from 'react';
import styles from './style.css';
import imgLogo from '../../../assets/images/logo-transparent.png';

const Brand = ({ brandName, brandImage }) => {
  const imgBrand = brandImage;
  return (
    <ul className={styles.root}>
      <li className={styles.brandImage}><img src={imgBrand} alt="logo" /></li>
      <li className={styles.brandName}><span>{brandName}</span></li>
    </ul>
  );
};

Brand.propTypes = {
  brandName: React.PropTypes.string,
  brandImage: React.PropTypes.string
};

Brand.defaultProps = {
  brandImage: imgLogo
};

export default Brand;

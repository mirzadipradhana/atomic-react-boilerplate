import React from 'react';
import styles from './style.css';
import defaultImgBrand from './images/logo-default.png';

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
  brandImage: defaultImgBrand
};

export default Brand;

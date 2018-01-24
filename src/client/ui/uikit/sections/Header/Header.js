import React from 'react';
import PropTypes from 'prop-types';
import Brand from '~/src/client/ui/uikit/components/Brand';
import NavBar from '~/src/client/ui/uikit/containers/TopNavBar';
import styles from './style.css';

const Header = ({ navigationItems, brandImage, hideBrandImage, brandName, className, location }) => {
  const headerStyle = className ? `${styles.container} ${className}` : styles.container;

  return (
    <div className={styles.root}>
      <div className={headerStyle}>
        <div className={styles.brand}>
          { !hideBrandImage ? <Brand brandName={brandName || null} brandImage={brandImage || null} /> : null }
        </div>
        <div className={styles.nav}>
          <NavBar navItems={navigationItems} location={location} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  navigationItems: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
  hideBrandImage: PropTypes.bool,
  brandImage: PropTypes.string,
  brandName: PropTypes.string,
  className: PropTypes.string,
};


export default Header;

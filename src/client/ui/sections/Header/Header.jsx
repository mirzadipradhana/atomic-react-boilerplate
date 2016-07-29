import React from 'react';
import Brand from '~/src/client/ui/components/Brand';
import NavBar from '~/src/client/ui/containers/TopNavBar';
import styles from './style.css';

const Header = ({ navigationItems }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Brand brandName="React Boilerplate" />
        </div>
        <div className={styles.nav}>
          <NavBar navItems={navigationItems} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  navigationItems: React.PropTypes.array
};


export default Header;

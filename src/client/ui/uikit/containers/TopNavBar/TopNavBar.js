import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import NavItem from './components/NavItem';
import styles from './style.css';

const TopNavBar = ({ navItems, onNavigate, location }) => {
  const getNavigationItems = (items) => {
    return (items || []).map((item, index) => {
      let isActive = false;

      if (R.propEq('anchor', R.propOr('', 'hash', location).substring(1), item)) {
        isActive = true;
      } else if (R.propEq('path', R.prop('pathname', location), item)) {
        isActive = true;
      }

      return (
        <NavItem
          key={`navItem-${index}`}
          path={item.path}
          anchor={item.anchor}
          name={item.name}
          onNavigate={onNavigate}
          isActive={isActive}
        />
      );
    });
  };

  return (
    <div className={styles.root}>
      <ul className={styles.container}>
        {getNavigationItems(navItems)}
      </ul>
    </div>
  );
};

TopNavBar.propTypes = {
  onNavigate: PropTypes.func,
  navItems: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
};

export default TopNavBar;

import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styles from './style.css';

const NavItem = ({ name, path, anchor, isActive }) => {
  const navigateToAnchor = () => {
    window.document.getElementById(anchor).scrollIntoView()
  };

  const NavButton = anchor
    ? <a href={`#${anchor}`} onClick={navigateToAnchor} className={isActive ? styles.active : ''}>{name}</a>
    : <Link to={path} activeClassName={isActive ? styles.active : ''}>
        {name}
      </Link>;

  return (
    <li className={styles.navItem}>
      {NavButton}
    </li>
  );
};

NavItem.defaultProps = {
  anchor: null,
};

NavItem.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  anchor: PropTypes.string,
  isActive: PropTypes.bool,
};

export default NavItem;

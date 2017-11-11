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
  name: React.PropTypes.string,
  path: React.PropTypes.string,
  anchor: React.PropTypes.string,
  isActive: React.PropTypes.bool,
};

export default NavItem;

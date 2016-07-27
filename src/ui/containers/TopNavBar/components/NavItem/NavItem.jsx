import { Link } from 'react-router';
import styles from './style.css';

const NavItem = ({ name, path }) => {
  return (
    <li className={styles.navItem}>
      <Link to={path} activeClassName={styles.active}>
        {name}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  name: React.PropTypes.string,
  path: React.PropTypes.string
};

export default NavItem;

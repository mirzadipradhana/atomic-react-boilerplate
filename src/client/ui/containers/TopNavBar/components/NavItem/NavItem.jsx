import { Link } from 'react-router';
import styles from './style.css';

const NavItem = ({ name, path, anchor }) => {
  const navigateToAnchor = () => {
    window.document.getElementById(anchor).scrollIntoView()
  };
  
  const NavButton = anchor
    ? <a onClick={navigateToAnchor}>{name}</a>
    : <Link to={path} activeClassName={styles.active}>
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
}

NavItem.propTypes = {
  name: React.PropTypes.string,
  path: React.PropTypes.string,
  anchor: React.PropTypes.string,
};

export default NavItem;

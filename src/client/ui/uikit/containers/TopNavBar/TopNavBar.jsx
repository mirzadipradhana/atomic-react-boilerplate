import NavItem from './components/NavItem';
import styles from './style.css';

const TopNavBar = ({ navItems, onNavigate, location }) => {
  const getNavigationItems = (items) => {
    return (items || []).map((item, index) => {
      let isActive = false;

      if (item.anchor && item.anchor === location.hash.substring(1)) {
        isActive = true;
      } else if (item.path && item.path === location.pathname) {
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
  onNavigate: React.PropTypes.func,
  navItems: React.PropTypes.arrayOf(React.PropTypes.object),
  location: React.PropTypes.object,
};

export default TopNavBar;

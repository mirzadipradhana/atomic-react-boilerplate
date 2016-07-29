import NavItem from './components/NavItem';
import styles from './style.css';

const TopNavBar = ({ navItems, onNavigate }) => {
  const getNavigationItems = (items) => {
    return (items || []).map((item, index) => {
      return (
        <NavItem
          key={`navItem-${index}`}
          path={item.path}
          name={item.name}
          onNavigate={onNavigate}
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
  navItems: React.PropTypes.array,
  currentPath: React.PropTypes.func
};

export default TopNavBar;

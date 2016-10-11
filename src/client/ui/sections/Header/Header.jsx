import Brand from '~/src/client/ui/components/Brand';
import NavBar from '~/src/client/ui/containers/TopNavBar';
import styles from './style.css';

const Header = ({ navigationItems, brandImage, brandName, className, location }) => {
  const headerStyle = className ? `${styles.container} ${className}` : styles.container;

  return (
    <div className={styles.root}>
      <div className={headerStyle}>
        <div className={styles.brand}>
          <Brand brandName={brandName || null} brandImage={brandImage || null} />
        </div>
        <div className={styles.nav}>
          <NavBar navItems={navigationItems} location={location} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  navigationItems: React.PropTypes.arrayOf(React.PropTypes.object),
  location: React.PropTypes.object,
  brandImage: React.PropTypes.string,
  brandName: React.PropTypes.string,
  className: React.PropTypes.string,
};


export default Header;

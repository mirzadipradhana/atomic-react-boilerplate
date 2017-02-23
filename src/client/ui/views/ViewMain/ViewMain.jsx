import Header from '~/src/client/ui/sections/Header';
import styles from './style.css';

const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Redux Examples',
    path: '/redux',
  },
].reverse();

class ViewMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <Header navigationItems={navItems} location={this.props.location} />
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ViewMain.propTypes = {
  children: React.PropTypes.object.isRequired,
  location: React.PropTypes.object,
};

export default ViewMain;


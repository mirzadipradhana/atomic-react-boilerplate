import Header from '~/src/client/ui/sections/Header';
import styles from './style.css';

const navItems = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
].reverse();

class ViewMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <Header navigationItems={navItems} />
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ViewMain.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default ViewMain;


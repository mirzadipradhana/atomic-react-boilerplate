import { connect } from 'react-redux';
import Header from '~/src/client/ui/sections/Header';
import Modal from '~/src/client/ui/sections/Modal';
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

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.props.dispatch({ type: 'CLOSE_MODAL' });
  }

  render() {
    return (
      <div className={styles.root}>
        <Header navigationItems={navItems} location={this.props.location} />
        <div className={styles.content}>
          {this.props.children}
        </div>
        <Modal {...this.props.modal} onClose={this.handleCloseModal} />
      </div>
    );
  }
}

ViewMain.defaultProps = {
  showOverlay: true,
};

ViewMain.propTypes = {
  dispatch: React.PropTypes.object,
  children: React.PropTypes.object.isRequired,
  location: React.PropTypes.object,
  modal: React.PropTypes.shape({
    open: React.PropTypes.bool.isRequired,
    modal: React.PropTypes.bool.isRequired,
    actions: React.PropTypes.array,
  }),
};


const mapStateToProps = ({ app }) => {
  return {
    modal: app.modal,
  };
};

export default connect(mapStateToProps)(ViewMain);


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '~/src/client/ui/uikit/sections/Header';
import Modal from '~/src/client/ui/uikit/sections/Modal';
import logo from '~/src/client/assets/images/bobowl-logo.svg';
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
        <Header navigationItems={navItems} location={this.props.location} brandImage={logo} />
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
  dispatch: PropTypes.func,
  children: PropTypes.object.isRequired,
  location: PropTypes.object,
  modal: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    modal: PropTypes.bool.isRequired,
    actions: PropTypes.array,
  }),
};


const mapStateToProps = ({ app, router }) => {
  return {
    modal: app.modal,
    location: router.location,
  };
};

export default connect(mapStateToProps)(ViewMain);


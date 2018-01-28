import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './style.css';

class Subscribe extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={`${styles.inputContainer} ${this.state.isOpen ? styles.inputContainerOpen : ''}`}>
          <Input style={{ height: '46px', marginLeft: '-27px' }} placeholder="your email please" />
        </div>
        <div className={`${styles.buttonContainer} ${this.state.isOpen ? styles.buttonContainerOpen : ''}`}>
          <Button
            onClick={this.handleClick}
            style={
              Object.assign(
                { width: '150px' },
                this.state.isOpen ? { position: 'relative', zIndex: 3 } : {}
              )
            }
          >
            {this.state.isOpen ? 'SUBMIT' : `I'M IN`}
          </Button>
        </div>
      </div>
    );
  }
}

Subscribe.propTypes = {
  onNavigate: PropTypes.func,
  navItems: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
};

export default Subscribe;

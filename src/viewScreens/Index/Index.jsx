import React from 'react';

import styles from './style.css';
import logo from '../../assets/images/logo.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.root}>
        <img src={logo} />
        <div>This is from react</div>
      </div>
    );
  }
}

import React from 'react';
import logo from '~/src/client/assets/images/bobowl-logo-font-white.svg';
import styles from './style.css';

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div>
            <h1 className={styles.heading}>RICE BOWL SPECIALITIES</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default PageIndex;

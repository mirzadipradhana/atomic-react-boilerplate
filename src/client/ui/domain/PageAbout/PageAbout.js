import React from 'react';
import styles from './style.css';
import Content from '../../uikit/sections/Content';

class PageAbout extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Content verticalAlign="middle">
          <h1 style={{ textAlign: 'center' }}>Hi, I'm Mirza Adipradhana</h1>
        </Content>
      </div>
    );
  }
}

export default PageAbout;

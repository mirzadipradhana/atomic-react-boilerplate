import React from 'react';
import styles from './style.css';

class PageAbout extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>Omm Nom Nom Nom</h1>
        <p>for inquiries please contact us <a href="mailto:hello@bobowl.id">hello@bobowl.id</a></p>
      </div>
    );
  }
}

export default PageAbout;

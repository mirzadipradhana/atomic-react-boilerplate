import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

class Content extends React.PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <div className={`${this.props.verticalAlign === 'middle' ? styles.middleContent : ''}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  verticalAlign: PropTypes.oneOf(['top', 'middle']),
  children: PropTypes.element.isRequired,
};

export default Content;

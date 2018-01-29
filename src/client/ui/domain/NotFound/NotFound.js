import React from 'react';
import Content from '../../uikit/sections/Content';

class NotFound extends React.Component {
  render() {
    return (
      <Content verticalAlign="middle">
        <h1 style={{ textAlign: 'center' }}>404 Not Found</h1>
      </Content>
    );
  }
}

export default NotFound;

// Domain container is HOC for code splitting

import React from 'react';
import PropTypes from 'prop-types';

class RouteAsyncContainer extends React.Component {
  componentWillMount() {
    this.cancelUpdate = false;

    this.props.load.then((Component) => {
      this.Component = Component;

      if (!this.cancelUpdate) {
        this.forceUpdate();
      }
    });
  }

  componentWillUnmount() {
    this.cancelUpdate = true;
  }

  render() {
    if (this.Component) {
      return this.Component.default
      ? <this.Component.default />
      : <this.Component />;
    }

    return null;
  }
}

RouteAsyncContainer.propTypes = {
  load: PropTypes.instanceOf(Promise).isRequired,
};

export default RouteAsyncContainer;


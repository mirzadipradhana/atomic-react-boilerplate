import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

// Components
import Routes from './routes/Routes.js';

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  render () {
    const {
      history
    } = this.props;

    return (
      <ConnectedRouter history={history} >
        <Route render={({ location }) => <Routes location={location} />} />
      </ConnectedRouter>
    ) ;
  }
}

export default AppContainer;

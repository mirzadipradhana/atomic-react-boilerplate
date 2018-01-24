import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer as HotAppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import createHistory from 'history/createBrowserHistory';
import createStore from './configureStore.js';

import AppContainer from './AppContainer';

injectTapEventPlugin();
const history = createHistory();
const store = createStore(history);

const rootEl = document.querySelector('#app');

const renderApp = (Component) => {
  render(
    <MuiThemeProvider>
      <HotAppContainer>
        <Provider store={store}>
          <Component history={history} />
        </Provider>
      </HotAppContainer>
    </MuiThemeProvider>,
    rootEl
  );
};

renderApp(AppContainer);
if (module.hot) {
  module.hot.accept('./AppContainer.js', () => {
    module.hot.accept();
    const nextAppContainer = require('./AppContainer.js');
    nextAppContainer.default ? renderApp(nextAppContainer.default) : renderApp(nextAppContainer);
  });
}


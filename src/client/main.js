import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './configureStore';
import routes from './routes';
import styles from './assets/css/globals.css';

const history = createBrowserHistory();
const store = configureStore(history);

injectTapEventPlugin();

const App = (
  <MuiThemeProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(App, document.querySelector('#app'));

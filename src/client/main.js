import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './configureStore';
import routes from './routes';
import styles from './assets/css/globals.css';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();
const App = (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(App, document.getElementById('app'));

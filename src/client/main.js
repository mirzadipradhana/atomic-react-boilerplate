import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import styles from './assets/css/globals.css';

injectTapEventPlugin();
const App = (
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
);

ReactDOM.render(App, document.getElementById('app'));

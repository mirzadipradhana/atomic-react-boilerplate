import { Router, browserHistory } from 'react-router';
import routes from './routes';

import styles from './assets/css/globals.css';

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));

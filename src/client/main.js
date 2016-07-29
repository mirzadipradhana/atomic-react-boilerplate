import { Router, browserHistory } from 'react-router';
import routes from './routes';

import styles from '../shared/assets/css/globals.css';

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));

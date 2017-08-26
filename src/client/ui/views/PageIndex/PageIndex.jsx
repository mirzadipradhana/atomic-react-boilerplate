import logo from '~/src/client/assets/images/bobowl-logo-font-white.svg';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '~/src/client/ui/components/Button';
import styles from './style.css';

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div>
          <h1 className={styles.heading}>RICE BOWL SPECIALITIES</h1>
        </div>
      </div>
    );
  }
}

export default PageIndex;

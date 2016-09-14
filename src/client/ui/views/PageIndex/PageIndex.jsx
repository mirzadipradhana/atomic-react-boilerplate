import logo from '~/src/client/assets/images/logo-dark.png';
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
        <img src={logo} alt="logo" />
        <div>This is from react</div>
        <RaisedButton label="Raised Button from Material-UI" />
        <Button className={styles.button}>Hallo My Button</Button>
      </div>
    );
  }
}

export default PageIndex;

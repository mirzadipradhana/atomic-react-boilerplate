import styles from './style.css';
import logo from '~/src/client/assets/images/logo-dark.png';

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <img src={logo} alt="logo" />
        <div>This is from react</div>
      </div>
    );
  }
}

export default PageIndex;

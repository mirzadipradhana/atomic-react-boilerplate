import logo from '~/src/client/assets/images/bobowl-with-brand-logo.svg';
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
          <h1 className={styles.heading}>WILL SERVE YOUR TUMMY SOON!</h1>
          <p className={styles.content}>for inquiries please contact us <a href="mailto:hello@bobowl.id">hello@bobowl.id</a></p>
        </div>
      </div>
    );
  }
}

export default PageIndex;

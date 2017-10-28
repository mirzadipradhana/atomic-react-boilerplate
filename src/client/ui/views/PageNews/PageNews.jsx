import logo from '~/src/client/assets/images/we-are-hiring.svg';
import styles from './style.css';

class PageNews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.container}>
          <div>
            <h2 className={styles.heading}>JOIN OUR TEAM AS</h2>
            <h1 className={styles.heading}>KITCHEN CREW</h1>
          </div>
          <div>
            <p className={styles.content}>send your cv to</p>
            <p className={styles.content}><a href="mailto:hello@bobowl.id">hello@bobowl.id</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNews;

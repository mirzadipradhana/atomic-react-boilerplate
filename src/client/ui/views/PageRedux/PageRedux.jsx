import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

class PageRedux extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
    this.handleIncrementOddClick = this.handleIncrementOddClick.bind(this);
    this.handleIncrementAsync = this.handleIncrementAsync.bind(this);
  }

  handleIncrementClick() {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  handleDecrementClick() {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  handleIncrementOddClick() {
    this.props.dispatch({ type: 'INCREMENT_IF_ODD' });
  }

  handleIncrementAsync() {
    this.props.dispatch({ type: 'INCREMENT_ASYNC' });
  }

  render() {
    return (
      <div>
        <h1>Redux Example</h1>
        <p>This is Redux example.</p>
        <h1>Counter: {this.props.counter}</h1>
        <div>
          <RaisedButton label="+" onClick={this.handleIncrementClick} />
          <RaisedButton label="-" onClick={this.handleDecrementClick} />
          <RaisedButton label="+ if odd" onClick={this.handleIncrementOddClick} />
        </div>
        <hr/>
        <div>
          <RaisedButton label="+ async" onClick={this.handleIncrementAsync} />
        </div>
      </div>
    );
  }
}

PageRedux.defaultProps = {
  counter: 0,
};

PageRedux.propTypes = {
  counter: React.PropTypes.number,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = ({ redux }) => ({
  counter: redux.counter,
});

export default connect(mapStateToProps)(PageRedux);

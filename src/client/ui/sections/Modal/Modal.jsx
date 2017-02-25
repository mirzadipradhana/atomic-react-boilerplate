import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
const Modal = (props) => {
  const handleClose = () => {
    props.onClose && props.onClose();
  };

  const defaultActions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      disabled={true}
      onTouchTap={handleClose}
    />,
  ];

  return (
    <div>
      <Dialog
        title="Dialog With Actions"
        actions={props.actions && props.actions.length ? props.actions : defaultActions}
        modal={props.modal}
        open={props.open}
      >
        Only actions can close this dialog.
      </Dialog>
    </div>
  );
};

Modal.defaultProps = {
  actions: [],
  modal: false,
  open: false,
};

Modal.propTypes = {
  actions: React.PropTypes.arrayOf(React.PropTypes.object),
  open: React.PropTypes.bool,
  onClose: React.PropTypes.func,
};

export default Modal;

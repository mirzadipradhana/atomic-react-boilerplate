import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

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
      onTouchTap={handleClose}
      primary
    />,
    <FlatButton
      label="Submit"
      onTouchTap={handleClose}
      primary
      disabled
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
  actions: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;

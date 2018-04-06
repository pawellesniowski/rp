import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { activeModalSelector, getModal } from 'controllers/modal';
import PropTypes from 'prop-types';

const ModalRoot = document.getElementById('modal-root');

@connect(state => ({
  activeModal: activeModalSelector(state),
}))
export class ModalContainer extends Component {
  static propTypes = {
    activeModal: PropTypes.object,
  };
  static defaultProps = {
    activeModal: null,
  };
  render() {
    const ActiveModal = getModal(this.props.activeModal);
    return ReactDOM.createPortal(
      ActiveModal ? <ActiveModal data={this.props.activeModal.data} /> : null,
      ModalRoot,
    );
  }
}

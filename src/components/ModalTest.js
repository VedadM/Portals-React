import React from 'react';
import Modal from './Modal';

class ModalTest extends React.Component {
  state = ({ openModal: false });

  openModal = () => {
      this.setState({openModal: true});
  }
  
  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => { alert("Hey")}}
        >
          Delete
        </button>
        <a onClick={() => this.setState({openModal: false})}>Cancel</a>
      </React.Fragment>
    );
  }

  renderContent() {
    return 'Do you want to delete this?';
  }

  renderModal() {
      if (this.state.openModal) {
        return (
            <Modal
                title="Hey This is Modal"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => this.setState({openModal: false})}
            />
        );
      }

      return <React.Fragment></React.Fragment>
  }

  render() {
    return (
        <React.Fragment>
            <div onClick={this.openModal}>Open Modal</div>
            {this.renderModal()}
        </React.Fragment>
    );
  }
}

export default ModalTest;
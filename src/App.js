import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {

  state = {
    modalIsOpen: false
  };

  showModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModalHandler} />
        <Backdrop
          show={this.state.modalIsOpen}
          closed={this.closeModalHandler} />
        <button className="Button" onClick={this.showModalHandler}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

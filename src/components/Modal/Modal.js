import React from 'react';

import './Modal.css';
import { CSSTransition } from 'react-transition-group';

const animationTiming = {
  enter: 1000,
  exit: 300
};

const modal = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
    classNames="fade-slide">
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;

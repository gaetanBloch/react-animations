import React from 'react';

import './Modal.css';
import { Transition } from 'react-transition-group';

const animationTiming = {
  enter: 1000,
  exit: 300
}

const modal = props => {
  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}>

      {state => {

        const cssClasses = [
          'Modal',
          state === 'entering'
            ? 'ModalOpened'
            : state === 'exiting' ? 'ModalClosed' : null
        ];

        return (
          <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );

      }}
    </Transition>
  );
};

export default modal;

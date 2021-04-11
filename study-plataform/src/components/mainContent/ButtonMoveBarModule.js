import React from 'react';
import { string } from 'prop-types';

class ButtonMoveBarModule extends React.Component {
  render() {
    const { directionButton, handleClickMoveBar, pixels } = this.props;
    return(
      <button
        className={`btn-controll ${directionButton}-controll`}
        onClick={ () => handleClickMoveBar(pixels)}
      >
        <i className={`fas fa-chevron-${directionButton}`}></i>
      </button>
    )
  }
}

ButtonMoveBarModule.propTypes = {
  directionButton: string.isRequired,
}

export default ButtonMoveBarModule;
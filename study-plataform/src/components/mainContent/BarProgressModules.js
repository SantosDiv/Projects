import React from 'react';
import ButtonMoveBarModule from './ButtonMoveBarModule';
import '../../css/BarProgressModules.css';

class BarProgressModules extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMoveBar = this.handleClickMoveBar.bind(this);
    this.buttonMoveLeft = this.buttonMoveLeft.bind(this);
    this.buttonMoveRight = this.buttonMoveRight.bind(this);

    this.state = {
      moveBarPx: 0,
      propCss: {},
      modulesOutScreen: 3,
    }
  }

  handleClickMoveBar(moveSymbol) {
    this.setState((oldState) => ({
      propCss: {transform: `translateX(${oldState.moveBarPx + moveSymbol}px)`},
      moveBarPx: oldState.moveBarPx + moveSymbol,
    }));
  }

  render() {
    const { propCss, moveBarPx, modulesOutScreen } = this.state;
    const pixelsAdd = 98;
    return(
      <div className="wrapper-bar-progress-modules">
        {moveBarPx
          ? <ButtonMoveBarModule
              directionButton="left"
              pixels={+98}
              handleClickMoveBar={ this.handleClickMoveBar }
            />
          : '' }
        <section className="bar-progress-modules" style={propCss}>
          <div className="modules-titles">
            <p>Módulo 1</p>
            <p className="disable-module">Módulo 2 <i className="fas fa-lock icon"></i></p>
            <p className="disable-module">Módulo 3 <i className="fas fa-lock icon"></i></p>
            <p className="disable-module">Módulo 4 <i className="fas fa-lock icon"></i></p>
            <p className="disable-module">Módulo 5 <i className="fas fa-lock icon"></i></p>
            <p className="disable-module">Módulo 6 <i className="fas fa-lock icon"></i></p>
          </div>
          <div className="bar-disable">
            <div className="bar-enable"></div>
          </div>
        </section>
        { Math.abs(moveBarPx) < modulesOutScreen * pixelsAdd
          ? <ButtonMoveBarModule
            directionButton="right"
            pixels={-98}
            handleClickMoveBar={ this.handleClickMoveBar }
          /> : '' }
      </div>
    )
  }
}

export default BarProgressModules;
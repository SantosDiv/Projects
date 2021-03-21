import React from 'react';
import ButtonMoveBarModule from './ButtonMoveBarModule';
import ButtonTitleModule from './ButtonTitleModule';
import * as api from '../../services/dataCourses';
import '../../css/BarProgressModules.css';

class BarProgressModules extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMoveBar = this.handleClickMoveBar.bind(this);

    this.state = {
      moveBarPx: 0,
      propCss: {},
      modulesOutScreen: (api.modules.length - 3),
      modules: api.modules,
    }
  }

  handleClickMoveBar(moveSymbol) {
    this.setState((oldState) => ({
      propCss: {transform: `translateX(${oldState.moveBarPx + moveSymbol}px)`},
      moveBarPx: oldState.moveBarPx + moveSymbol,
    }));
  }

  render() {
    const { propCss, moveBarPx, modulesOutScreen, modules } = this.state;
    const { moduleSelected } = this.props;
    const pixelsAdd = 98;
    return(
      <div className="wrapper-bar-progress-modules">
        {moveBarPx
          ? <ButtonMoveBarModule
              directionButton="left"
              pixels={98}
              handleClickMoveBar={ this.handleClickMoveBar }
            />
          : '' }
        <section className="bar-progress-modules" style={propCss}>
          <div className="modules-titles">
            { modules.map((module) =>
              <ButtonTitleModule
                key={ module.number }
                module={ module.number }
                loked={ module.loked }
                moduleSelected = { moduleSelected }
              />
            )}
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

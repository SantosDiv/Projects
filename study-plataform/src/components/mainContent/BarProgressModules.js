import React from 'react';
import ButtonMoveBarModule from './ButtonMoveBarModule';
import ButtonTitleModule from './ButtonTitleModule';
import * as api from '../../services/dataCourses';
import styled, { keyframes }  from 'styled-components';
import '../../css/BarProgressModules.css';

class BarProgressModules extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMoveBar = this.handleClickMoveBar.bind(this);
    this.progressBarEnable = this.progressBarEnable.bind(this);

    this.state = {
      moveBarPx: 0,
      propCss: {},
      modulesOutScreen: (api.modules.length - 3),
      modules: api.modules,
      width: 0,
    }
  }

  handleClickMoveBar(moveSymbol) {
    this.setState((oldState) => ({
      propCss: {transform: `translateX(${oldState.moveBarPx + moveSymbol}px)`},
      moveBarPx: oldState.moveBarPx + moveSymbol,
    }));
  }

  progressBarEnable() {
    let count = 0;

    api.modules.forEach((element, _, array) => {
      const lengthModules = array.length;
      if (!element.loked) count += (100/lengthModules);
    });

    const progress = keyframes`
      from {
        width: 0;
      }

      to {
        width: ${count}%;
      }
    `
    const Bar = styled.div`
      background-color: var(--secondary-color);
      border-radius: 0.8rem;
      height: 0.5rem;
      width: ${count}%;
      animation: ${progress} 2s;
    `
      return <Bar />;
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
            { this.progressBarEnable() }
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

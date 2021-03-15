import React from 'react';
import '../../css/BarProgressModules.css'

class BarProgressModules extends React.Component {
  render() {
    return(
      <section className="bar-progress-modules">
        <div className="modules-titles">
          <p>Módulo 1</p>
          <p className="disable-module">Módulo 2 <i className="fas fa-lock icon"></i></p>
          <p className="disable-module">Módulo 3 <i className="fas fa-lock icon"></i></p>
        </div>
        <div className="bar-disable">
          <div className="bar-enable"></div>
        </div>
      </section>
    )
  }
}

export default BarProgressModules;
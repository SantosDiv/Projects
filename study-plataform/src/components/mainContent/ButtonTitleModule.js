import React from 'react';

class ButtonTitleModule extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { module, loked, moduleSelected } = this.props;
    if (!loked) moduleSelected(module)
  }

  render() {
    const { module, loked } = this.props;

    return(
      <button
        onClick={ this.handleClick }
        className={`button-module ${loked && 'disable-module'}`}
      >
        {`Módulo ${module}`}
        {loked && <i className="fas fa-lock icon"></i> }
      </button>
    );
  }
}

export default ButtonTitleModule;
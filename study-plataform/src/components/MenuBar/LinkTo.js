import React from 'react';
import { Link } from 'react-router-dom';

class LinkTo extends React.Component {
  render() {
    const { nameItem ,menuControl, path, icon } = this.props;

    return(
      <Link to={ `/dashboard/${path}` } className="link" onClick={ () =>
        menuControl({animation: 'slideOut 1s', left: '-300px'})
      }>
        <li>{nameItem}</li>
        {icon}
      </Link>
    );
  }
}

export default LinkTo;
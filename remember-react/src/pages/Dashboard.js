import React from 'react';

class Dashboard extends React.Component {
  render() {
    const { location, match } = this.props;
    const { params } = match;
    const { user } = params;
    return(
      <header class="header" role="banner">
        <div class="container">
          <span class="control-menu visible-xs ico-menu-2"></span>
          <span class="control-sidebar visible-xs ico-list"></span>
          <h1 class="project-name"><a href="#">Olá, {user} </a></h1>
          <a href="#" class="help-suggestions ico-question hidden-xs">Ajuda e Sugestões</a>

          <div class="dropdown hidden-xs">
            <a href="#" data-toggle="dropdown" class="title-dropdown">emkt2013</a>
            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
              <li><a href="#" role="menuitem">Option 1</a></li>
              <li><a href="#" role="menuitem">Option 2</a></li>
              <li><a href="#" role="menuitem">Option 3</a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Dashboard;
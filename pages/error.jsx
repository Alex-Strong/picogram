import React from 'react';

import Logo from '../components/logo';
import Menu from '../components/menu';


class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">

          <Logo name="Alex" />
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          <p></p>
        </main>
        <footer className="footer">
          <p>&copy; 2017 Alex/error</p>
        </footer>
      </div>
    );
  }
}

export default Main;

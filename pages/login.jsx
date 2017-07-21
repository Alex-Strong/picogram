import React from 'react';

import Logo from '../components/logo';
import Menu from '../components/menu';
import Name from '../components/name';

class Login extends React.Component {
  render() {
    return (
      <div className="containerInput" >
        <header className="header">

          <Logo name="Alex" />
        </header>
        <nav className="navigation">

        </nav>
        <main className="content">


        <Name />


        </main>
        <footer className="footer">
          <p>&copy; 2017 Alex/login</p>
        </footer>
      </div>
    );
  }
}

export default Login;

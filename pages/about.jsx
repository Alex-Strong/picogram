import React from 'react';

import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

class About extends React.Component {
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
          <p>coming soon</p>
        </main>
        <footer className="footer">
          <p>&copy; 2017 Alex/about</p>
        </footer>
      </div>
    );
  }
}

export default About;

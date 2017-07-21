import React from 'react';


import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';
import Name from '../components/name';

class Main extends React.Component {
  render() {
    return (
      <div>



      <div className="container">
        <header className="header">

          <Logo />

        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />
          <Like />
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />
          <Like />
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />
          <Like />
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />
          <Like />
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />
            <Like />
        </main>

      </div>
      <footer className="footer">
        <p>&copy; 2017 Alex Bootcamp/Main</p>
      </footer>
    </div>
    );
  }
}

export default Main;

import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Menu extends React.Component {


  render() {

    return (

      <ul >
        <li className="nav1"><Link activeClassName="link" to="/main" >Home</Link></li>
        <li className="nav2"><Link activeClassName="link" to="/about" >About</Link></li>
      </ul>

    );
  }
}

export default Menu;

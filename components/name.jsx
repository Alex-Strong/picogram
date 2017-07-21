import React from 'react';

class Name extends React.Component {
  constructor() {
    super();

    this.state = {username: ''}
    //  name:"Alex";
    //}
  }

  setName(e) {
    console.log(this.state.username);
    if (this.state.username.length===0){
       document.getElementById("error").innerHTML = "Enter Username";
    }
    else{
      alert("Welcome "+this.state.username);
      window.location.href = "http://localhost:8081/?name=Alex#/main" ;

    }

  }

  handleChange(e) {

    this.setState({ username: e.target.value });
  }

  render() {

    return (

      <form>

        <label>
          Username:
          <input type="text" name="name" onChange={ this.handleChange.bind(this) } />
        </label><div></div>
        <input id="mainB" type="button" value="Submit" onClick = {this.setName.bind(this)} />
        <p id="error"></p>
      </form>


    );
  }
}

export default Name;

import React from 'react';

class Like extends React.Component {
  constructor() {
    super();

    this.state = {
      likes: 0
    }
  }
  curentDate(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    console.log(m + "/" + d + "/" + y);
  }
  addLike() {
    this.setState({likes: this.state.likes + 1})
  }

  render() {
    return (
      <div>


      <button className="like" onClick={this.addLike.bind(this)}>{<img src="http://www.pngmart.com/files/3/Facebook-Like-PNG-Image.png" height="42"/>}{this.state.likes}</button>

    
      </div>
    );
  }
}

export default Like;

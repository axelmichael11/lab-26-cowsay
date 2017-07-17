import './style/style.scss'

import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    return (
      <div>
      <h1> cool </h1>
      <p>sweet slugs </p>
      </div>
    );
  };
}


class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <header className='hello-navbar'>
        <h1> counter </h1>
      </header>
    );
  }
}

ReactDom.render(<App />, document.getElementById='cowsay');

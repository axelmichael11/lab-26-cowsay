import './style/style.scss'

import React from 'react'
import ReactDom from 'react-dom'
import cowsay from 'cowsay-browser'
import faker from 'faker'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'hello cows',
      content: ''
      }
      this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    this.setState((state)=>{
        return {
          content: cowsay.think({
            text : faker.lorem.words(),
            e : "oO",
            T : "U "})
        }
    })
  }
  render(){
    return (
      <div>
      <h1> Generate Cowsay Lorem </h1>
      <p onClick={this.handleClick}>
      Click Me!! <pre>{this.state.content}</pre> </p>
      </div>
    );
  };
}

ReactDom.render(<App />, document.getElementById('cowsay'));

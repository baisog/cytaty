import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cytat: {},
    }
  }
  componentDidMount() {
    fetch('https://cytaty.herokuapp.com/api/quotes/random')
      .then((response) => response.json())
      .then((cytaty) => this.setState({ cytat: cytaty[0] }))
      .catch(console.log)
  }

  handleClick = () => {
    fetch('https://cytaty.herokuapp.com/api/quotes/random')
      .then((response) => response.json())
      .then((cytaty) => this.setState({ cytat: cytaty[0] }))
      .catch(console.log)
  }

  render() {
    return (
      <>
        <div className='quote-container'>
          <div className='quote'>
            <h1>"{this.state.cytat.text}"</h1>
            <h3>{this.state.cytat.author}</h3>
          </div>
          <div className='button-cont'>
            <button onClick={this.handleClick}>Następny</button>
          </div>
        </div>

        <div className='background'></div>
      </>
    )
  }
}

export default App

import React from 'react';
import{robots} from'../robot';
import './App.css';
import CardList from '../components/CardList';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
    searchField:"",
    robots: robots

    }
  } 

  oninputChange = (event) => ( 
    this.setState({searchField: event.target.value})

  )


  render() {
    const filteredRobots = this.state.robots.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>eden</h1>
        <div className='pa2'>
          <input 
            type='text'
            placeholder='search robots'
            className='pa3 ba--green bg-lightest-blue'
            onChange={ this.oninputChange }/>
        </div>
        <CardList robots={ filteredRobots }/>
      </div>
    )
  }
      
}

export default App;

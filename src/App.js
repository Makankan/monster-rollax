import React, { Component } from 'react';
import './App.css';
import {CardList} from "./components/cardList/card-list.component";
import {Search} from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state={
      monsters:[],
      searchFields:''
    }
  }
  handleChange=(e)=>{
    this.setState({searchFields:e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({monsters:users}));
  }
  render(){
    const {monsters,searchFields} = this.state; //Destrusturing
    const filteredMonsters=monsters.filter(monster=> monster.name.toLowerCase().includes(searchFields.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rollax</h1>
        <Search
          placeHolder ='search monster'
          handleClick={this.handleChanged}
        />
        {/* passing via props to anotheer component */}
        <CardList monsters={filteredMonsters}/> 
      </div>
    );
  }
}

export default App;

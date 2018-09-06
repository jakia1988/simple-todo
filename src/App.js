import React, { Component } from 'react';
import InputComponent from './components/InputComponent'
import UserCard from './components/common/CardComponent'
class App extends Component {
  render() {
    return (
      <div className="CardLayout">
         <UserCard name="To-Do List " content={
           <InputComponent/>
         } />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import Alert from './common/SnackbarComponent';
import Data from './DisplayComponent' 
function getCompleteDate(){
  var date = new Date();
  return (date.getMonth()+1) + '/' + date.getDate() + '/' +  date.getFullYear()+ ' '+ date.getHours()+'-'+date.getMinutes()+'-'+date.getSeconds()
}

export default class InputComponent extends Component {
  constructor(props){
    super();
    this.state = {
        input : '',
        open: false,
        msg: '',
        data: []
    }
  } 
    
  _handleSubmit(){
    if(this.state.input === ''){
      this.setState({open:true, msg: 'Please Enter your task'})
    }else{
      const todo = {
          id: this.state.data.length+1,
          name:this.state.input,
          created:  getCompleteDate()
      }
      this.state.data.push(todo)   
      this.setState({data: this.state.data,open:true, msg: `Task with ID:${todo.id} is added`})  
    }    
    
  } 
  _handleSnackBar(){
    setTimeout(() => {
      this.setState({
          open: false
      });
  }, 500);
  } 
  _handleDeleteRow(id){    
    const filteredArr = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.setState({data: filteredArr,open:true, msg: `Task with ID:${id} is removed`})
  }
  render() {
    return (  
      <div className="wrapper"> 
        <div className="inputWrapper" >       
            <input type="text" value={this.state.input} placeholder="Enter To-Do" onChange={(e)=>this.setState({input:e.target.value})}/>
            <Button variant="raised" color="primary"  size="small" onClick={this._handleSubmit.bind(this)}>
              <i className="material-icons">add</i>
            </Button>            
        </div>
        <div className="tblwrapper">
          {
             this.state.data.length > 0 && <Data data ={this.state.data} _handleDelete={this._handleDeleteRow.bind(this)}/>
          }
          
        </div>
      <Alert active={this.state.open} message={this.state.msg} _handleSnackbarAction={this._handleSnackBar.bind(this)}/>
      </div>  
     
    )
  }
}

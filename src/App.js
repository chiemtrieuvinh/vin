import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      userForm : {
        name: ''
      },
      userList :[]
    }
    this.CurrentId = 0
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault();
    alert(this.state.userForm.name)
    this.CurrentId += 1
    const user = {
      id : this.CurrentId,
      name: this.state.userForm.name
     }
    this.setState({
      userForm: {
        id: 0,
        name: ''
      },
      
      userList : [].concat(this.state.userList, user)
    })
  }
  handleChange(event){
    event.preventDefault();
    this.setState({
      userForm : Object.assign({},this.state.userForm, {
       [event.target.name] : event.target.value
      })
    })
  }
  handleEdit(id){
    const selectedUser = this.state.userList.find(function(item){
      return item.id === id
    })
    this.setState({
      userForm: {
        id : selectedUser.id,
        name: selectedUser.name
      }
    })
  }
  render() {
    const list = this.state.userList.map(function(item){
      return <tr key = {item.id}>
      <td>{item.id}</td>
        <td>{item.name}</td>
        <td><button onClick={function(event){
          event.preventDefault();
          this.handleEdit(item.id)
        }.bind(this)}>edit</button></td>
        <td><button>delete</button></td>
        
      </tr>
    }.bind(this))
    return (
     <div>
     <form onSubmit={this.handleSubmit}>
     <p>Name : {''}
     <input name="name" value={this.state.userForm.name} onChange={this.handleChange}/>
     <p><button type="submit">submit</button></p>
     </p>
     </form>
     {list}
      </div>
    );
  }
}

export default App;

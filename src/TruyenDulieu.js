import React, { Component } from 'react';
import Test from './component/Test.js'
import PinPut from './component/PinPut.js'
import db from './component/data.json'
const uuidv1 = require('uuid/v1')

class TruyenDulieu extends Component {
    constructor(props){
        super(props)
        this.state={
            id: 0,
            isUpdate : true,
            searchText: '',
            name: '',
            list: []
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.getSearchText = this.getSearchText.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        
    }
    handleSubmit(event){
        console.log('submit da nhan duoc la: '+ this.state.name)
        event.preventDefault()
        const user = {
            id: parseInt(uuidv1(),20),
            name: this.state.name
        }
        this.setState({
            id: 0,
            name: '',
            list: [].concat(this.state.list, user)
        })
    }
    handleChange(event){
        event.preventDefault();
        this.setState(
            {name: event.target.value}
        )
    }
    handleClick(){
        alert('truyen du lieu thanh cong')
    }
    handleUpdate(){
       
        this.setState({
            isUpdate: !this.state.isUpdate
        })
    }
    getSearchText(dl){
        this.setState({
            searchText: dl
        })
    }
    render() {
        console.log(this.state.name)
        console.log(this.state.list)
        // console.log(db.name)
        // console.log(parseInt(uuidv1()))
        // console.log(this.state.isUpdate)
        // console.log('gia tri ma search text da nhan duoc la: ' + this.state.searchText)
        const mang = this.state.list.map((item)=>{
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                </tr>
                <tr>
                   <td>{item}</td>
                    
                </tr>
            </table>
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input name="name" onChange={this.handleChange} value={this.state.name} />
                <button>Submit</button>
                </form>
                {mang}
                
            </div>
        );
    }
}

export default TruyenDulieu;
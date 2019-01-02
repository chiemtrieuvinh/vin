import React, { Component } from 'react';
import App from './App'
import Navbar from './component/Navbar.js'
import Header from './component/Header.js'
import Test from './component/Test.js'
import Footer from './component/Footer'
import DieuHuongURL from './component/DieuHuongURL'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
class Demo extends Component {
    handleClick(){
        alert('truyen du lieu thanh cong')
    }
    render() {
        return (
           <Router>
            <div>
                
               <div id="page-top">
             <Navbar/>
        <Header/>
        <br/>
          <DieuHuongURL/>
          <Footer/>
          <Test ketnoi={this.handleClick}/>
            </div>
           
            </div>
            </Router>
        );
    }
}
export default Demo
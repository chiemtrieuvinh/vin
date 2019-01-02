import React, { Component } from 'react';

class InsideRelatedNews extends Component {
    render() {
        return (
           
            <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <img src={this.props.anh} alt="qweqwe" className="img-fluid" />
            <p className="lead">{this.props.name}</p>
            <hr className="my-2" />
            <p>{this.props.noidung}</p>
          </div>
            </div>
        
        );
    }
}

export default InsideRelatedNews;
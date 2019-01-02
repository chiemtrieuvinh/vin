import React, { Component } from 'react';

class Test extends Component {
    handleChange(){
        if(this.props.isUpdate === true){
            return <button onClick={this.props.click}>{this.props.isUpdate ? "Close" : "Add"}</button>
        }
        else{
            return <button onClick={this.props.click}>{this.props.isUpdate ? "Close" : "Add"}</button>
        }
    }
    render() {
        return (
            <div>
                {this.handleChange()}
            </div>
        );
    }
}

export default Test;
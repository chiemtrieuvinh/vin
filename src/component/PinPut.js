import React, { Component } from 'react';

class PinPut extends Component {
    constructor(props){
        super(props)
        this.state={
            tempValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
            event.preventDefault()
            this.setState({
                tempValue : event.target.value
            })
    }
    render() {
        console.log(this.state.tempValue)
        return (
            <div>
                   <div className="form-group">
                      <label for="">input</label>
                      <form>
                      <input type="text" className="form-control" aria-describedby="helpId" name="tempValue" value={this.state.tempValue} onChange={this.handleChange}/>
                     
                     <div className="btn btn-info" onClick={(dl)=>this.props.nhan(this.state.tempValue)}>Click</div>
                     </form>
                    </div>
            </div>
        );
    }
}

export default PinPut;
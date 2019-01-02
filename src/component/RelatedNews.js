import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import InsideRelatedNews from './InsideRelatedNews';
import db from './data.json'
class RelatedNews extends Component {
    constructor(props){
      super(props)
    }
    render() {
      console.log(this.props)
      console.log(this.props.match.params.id)
        return (
            <div>
                    <div>asdasdass
                {
                  db.map((value,key)=>{
                    if(value.id == this.props.match.params.id){
                      return(
                        <InsideRelatedNews key={key} id={value.id} anh={value.anh} name={value.name} noidung={value.noidung}/>
                      )
                    }
                  })
                
                }
        </div>

                <div>


          {/* begin tin lien quan */}
        <div className="container">
          <div className="card border-primary">
            <div className="card-body">
              <h4 className="card-title">Tin lien quan</h4>
            </div>
        </div>
 {/* end tin lien quan */}



  {/* begin cac tin lien quan */}
          <div className="col">
          <div className="row">
            <div className="card-deck">
              <div className="card">
                <img className="card-img-top" src="http://placehold.it/500x300/" alt="qweqwe" />
                <div className="card-body">
                  <h4 className="card-title">tin giat gan</h4>
                  <p className="card-text">Texqweqweqweqweqweqweqweqweqweqweqweqweqweqwet</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="http://placehold.it/500x300/" alt="qweqwe" />
                <div className="card-body">
                  <h4 className="card-title">tin giat gan</h4>
                  <p className="card-text">Texqweqweqweqweqweqweqweqweqweqweqweqweqweqwet</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="http://placehold.it/500x300/" alt="qweqwe" />
                <div className="card-body">
                  <h4 className="card-title">tin giat gan</h4>
                  <p className="card-text">Texqweqweqweqweqweqweqweqweqweqweqweqweqweqwet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
       {/* end tin lien quan */}
            </div>
            
        );
    }
}

export default RelatedNews;      

import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import News from './News.js'
import NewsItem from './NewsItem.js'
import RelatedNews from './RelatedNews.js'
import Contact from './Contact'
class DieuHuongURL extends Component {
    render() {
        return (
           
            <div>
            <Route  exact path="/news" component={News}/>
            <Route exact path="/newsitem" component={NewsItem}/>
            <Route exact path="/relatednews/:name.:id.html" component={RelatedNews}/>
            <Route exact path="/contact" component={Contact}/>
            </div>
          
        );
    }
}

export default DieuHuongURL;
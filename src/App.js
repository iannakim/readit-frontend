import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import './App.css';

import Header from './Header'
import Home from './components/Home'
import NotFound from './NotFound.js'


class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        < Header />
          <div>
            <Switch>
              <Route path="/" exact component={Home}/>
              {/* <Route path="/articles" exact component={ArticlesContainer}/>
              <Route path="/articles/:id/" render={this.showSingleArticle}/>
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp}/>
              <Route path="/activities" component={Activities} />
              <Route path="/account" component={Account} /> */}
              <Route component={NotFound} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;

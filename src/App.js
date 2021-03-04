import React from 'react'
import { Route, Switch } from 'react-router'
import './App.css';

import Header from './Header'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import ArticlesContainer from './components/ArticlesContainer'
import LogsContainer from './components/LogsContainer'
import NotFound from './NotFound.js'


class App extends React.Component {
  
  state = {
    articles: [],
    currentUser: null,
    isUserLoggedIn: true
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/articles")
      .then(res => res.json())
      .then((allArticles) => {
        this.setState({
          articles: allArticles.data
        })
      })
    
    // if(this.state.isUserLoggedIn){
    // fetch(`http://localhost:3000/logs/${this.currentUser.token}`)
    // }
  }

  renderArContainer = (routerProps) => {
    if(this.state.isUserLoggedIn){
      return <div>
                <ArticlesContainer
                  currentUser={this.state.currentUser}
                  articles={this.state.articles}
                />
             </div> 
    }
    // else {
    //   alert('Please Log in first!')
    //   //redirect to login page
    // }
  }

  renderLogsContainer = (routerProps) => {
    if(this.state.isUserLoggedIn){
      return <div>
                <LogsContainer 
                  currentUser={this.state.currentUser}
                />
             </div>
    }
  }


  render(){
    // check to see if the right data is being fetched to state
    // console.log(this.state.articles)
    return (
      <div className="App">
        < Header />
          <div>
            <Switch>
              <Route path="/" exact component={ Home }/>
              <Route path="/articles" exact render={ this.renderArContainer }/>
              <Route path="/logs" exact render={ this.renderLogsContainer }/>
              <Route path="/login" component={LogIn} />
              <Route path="/signup" component={SignUp}/>
              {/* <Route path="/articles/:id/" render={this.showSingleArticle}/> */}
              {/* <Route path="/activities" component={Activities} /> */}
              {/* <Route path="/account" component={Account} /> */}
              <Route component={NotFound} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;

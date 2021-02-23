import React from 'react';
import './App.css';
import Logo from './Logo';
import NotFound from './NotFound'
import { Route, Switch } from 'react-router'

class App extends React.Component {
  
  render(){
    return (
        <div className="App">
          <Logo />

            <main>

              <Switch>
                <Route path="/" exact render={ this.renderSignUp } />
                <Route path="/signin" exact render={ this.renderSignIn } />
                <Route path="/home" exact render={ this.renderHome } />
                <Route path="/lists" exact render={ this.renderLists } />
                <Route component={NotFound} />
              </Switch>

            </main>

        </div>
    );
  }
}

export default App;

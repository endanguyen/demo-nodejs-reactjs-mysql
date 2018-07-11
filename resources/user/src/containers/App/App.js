import React, {Component} from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {PropsRoute} from 'react-router-with-props';
import Home from '../../views/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      methods: {},
    };
  }

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main">
            <div>
              <Switch>
                <PropsRoute path="/" name="Home" component={Home}/>
                <Redirect from="/" to="/home"/>
              </Switch>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

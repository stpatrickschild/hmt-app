import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { ForPatients } from './components/ForPatients';
import { ForInsurersAndProviders } from './components/ForInsurersAndProviders';
import SelectDropDown from './components/SelectDropDown';
import { ForPolicyMakers } from './components/ForPolicyMakers';
import { HOME } from './components/HOME';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import NavigationBar from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={SelectDropDown} />
              <Route exact path="/ForInsurersAndProviders" component={ForInsurersAndProviders} />
              <Route path="/AboutUs" component={AboutUs} />
              <Route path="/HOME" component={HOME} />
              <Route path="/ForPatients" component={ForPatients} />
              <Route path="/ForPolicyMakers" component={ForPolicyMakers} />

              <Route component={NoMatch} />

            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}




export default App;

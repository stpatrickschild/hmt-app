import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './components/About';
import { InsuranceFinder } from './components/Insurancefinder';
import { ProvidersCost } from './components/ProvidersCost';
import { Resources } from './components/Resources';
import { MedicalPriceTransparency } from './components/MedicalPriceTransparency';
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
              <Route exact path="/" component={MedicalPriceTransparency} />
              <Route path="/about" component={About} />
              <Route path="/providerscost" component={ProvidersCost} />
              <Route path="/insurancefinder" component={InsuranceFinder} />
              <Route path="/resources" component={Resources} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}




export default App;

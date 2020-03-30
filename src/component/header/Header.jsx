import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Home from '../home/Home';
import ScenarioListContainer from '../scenario/ScenarioListContainer';
import Stats from '../stats/Stats';
import ClassifierContainer from '../classifier/ClassifierContainer';
import ScenarioContainer from'../scenario/ScenarioContainer';

export default function Header() {
    return (
        <Router>
          <Container>
            <Navbar  className="m-b-4" expand="lg" bg="dark" variant="dark" fixed="top">
              <Navbar.Brand href="/">Eggplant admin</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/scenarii">Dataset</Nav.Link>
                <Nav.Link href="/model">Model</Nav.Link>
                <Nav.Link href="/stats">Perfomences</Nav.Link>
              </Nav>
            </Navbar>
          </Container>

          <Switch>
            <Route exact path="/scenarii" component={ScenarioListContainer} />
            <Route path="/scenarii/:id" component={ScenarioContainer} />
            <Route exact path="/model" component={ClassifierContainer} />
            <Route exact path="/stats" component={Stats} />
            <Route exact path="/" component={Home} />
          </Switch>
      </Router>
    );
}

/*¨
Si on veut afficher plusieurs composant sur une route on enlève le exact
Si on veut passer une parametre 
<Route exact path="/model/:id" component={Classifier} />
this.props.match.params.id
this.props.history.push("/");
*/

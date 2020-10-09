import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="nav-link"> Home </Link>&nbsp;|&nbsp;
                        <Link to={'/contact'} className="nav-link">Contact</Link>&nbsp;|&nbsp;
                        <Link to={'/about'} className="nav-link">About</Link>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </Router>
        )
    }
}


export default App;
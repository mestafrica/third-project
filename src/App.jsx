import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Weather from './components/Weather.jsx';
import School from './components/School.jsx';
import Incubator from './components/Incubator.jsx';
import News from './components/News.jsx';
import Contact from './components/Contact.jsx'

import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends React.Component {

    render() {
        let schools = ['MEST', 'School1', 'Harvard'];

        let renderSchool = (prams) => {
            prams.schoolList= schools;

            return <School {...prams} />
        };

        return (
            <HashRouter >
                <div className="container">
                    <Header schoolList={schools}/>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route exact path="/Weather" component={Weather}/>
                                <Route exact path="/school" render={renderSchool}/>
                                <Route path="/school/:id" component={School} />
                                <Route path="/incubator" component={Incubator}/>
                                <Route path="/News" component={News}/>
                                <Route path="/contact" component={Contact}/>
                                <Route render={() => <h1>Page NOT Found</h1>}/>
                            </Switch>
                        </div>
                        <Footer/>
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
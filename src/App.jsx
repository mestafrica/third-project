import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home.jsx';
import School from './components/School.jsx';
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
                <div className="main">
                <Header schoolList={schools}/>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/school" render={renderSchool}/>
                            <Route path="/school/:id" component={School} />
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
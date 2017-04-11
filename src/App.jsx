import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home.jsx';
import School from './components/School.jsx';
import Contact from './components/Contact.jsx'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                        <div>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/school" component={School} />
                                <Route path="/contact" component={Contact} />
                                <Route render={() => <h1>Page NOT Found</h1>}></Route>
                            </Switch>
                        </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />,  document.getElementById('app'));
import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import {Home, About} from "./pages";

class App extends Component{
    _handleMouseOver = () => {
        About.preload();
    }
    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onMouseOver={this._handleMouseOver}>About</Link>
                    </li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </>
        )
    }
}

export default App;

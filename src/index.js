import React from 'react';
import {render} from "react-dom";

import { User } from './app/components/User';
import { Main } from './app/components/Main';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Babu"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('root'));
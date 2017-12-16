import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            txt: 'this is the state text',
            cat: 0
        }
    }

    update(e) {
        this.setState({
            txt: e.target.value,
        })
    }

    render() {
        const txt = this.state.txt;
        const cat = this.state.cat;

        return (
            <div>
                <h1>{txt} - {cat}</h1>
                <Widget update={this.update.bind(this)} /> 
            </div>
        )
    }
}

const Widget = (props) => 
    <input type="text" onChange={props.update} />
    
export default App

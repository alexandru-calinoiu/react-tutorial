import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        const txt = this.props.txt;

        return (
            <div>
                <h1>{txt}</h1>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired,
}

App.defaultProps = {
    txt: "this is the default text",
}

export default App

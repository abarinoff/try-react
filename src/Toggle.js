import React, {Component} from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick() {
        console.log("this: ", this);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;
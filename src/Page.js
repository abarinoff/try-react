import React, {Component} from 'react';
import Toggle from './Toggle';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((prevState, props) => ({date: new Date()}));
    }

    render() {
        const numbers = [1, 2, 3, 4];
        const listItems = numbers.map((number) => (
            <li>{number}</li>
        ));
        return (
            <div>
                <div>Page {this.state.date.toLocaleTimeString()}</div>
                <ul>{listItems}</ul>
                <Toggle/>
            </div>
        );
    }
}

export default Page;
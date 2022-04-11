import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        console.log("1 constructor");
    }

    tick = () => {
        console.log("tick");
        this.setState({
            date: new Date()
        });
    }

    componentDidMount = () => {
        console.log("3 componentDidMount");
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate = () => {
        console.log("4 componentDidUpdate");

    }

    componentWillUnmount = () => {
        console.log("componentWillUnmount");
        clearInterval(this.timerID);
    }

    render() {
        console.log("2 render");
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

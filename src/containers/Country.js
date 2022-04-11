import React, { Component } from 'react'

export default class Country extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 101,
            countryName: 'india'
        }
    }

    changeCountryname = () => {
        // console.log('ok');
        this.setState({
            countryName: 'china'
        })
    }


    render() {
        return (
            <div>
                {this.state.countryName}
                <button onClick={() => this.changeCountryname()}>Change Country</button>
            </div>
        )
    }
}

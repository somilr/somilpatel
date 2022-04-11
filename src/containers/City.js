import React, { Component } from 'react'

export default class City extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            id: 101,
            cityName:'surat'
        }
    }

    changeCityname = () => {
        console.log('ok');
        this.setState({
            cityName: 'rajkot' 
        })
    }
    
  render() {
    return ( 
      <div>
          {this.state.cityName}
          <button onClick={() => this.changeCityname()}>Change City</button>
      </div>
    )
  }
}


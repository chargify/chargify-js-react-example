import React, { Component } from 'react';
import './App.css';
import ChargifyForm from './components/ChargifyForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.handlePaymentTypeChange = this.handlePaymentTypeChange.bind(this);
    this.state = {paymentType: 'card'};

    if (!window.hasOwnProperty('Chargify')) {
      throw new Error('Chargify.js is not loaded')
    }
  }

  handlePaymentTypeChange(e) {
    this.setState({paymentType: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <p>
          <select onChange={this.handlePaymentTypeChange}>
            <option value="card">Credit Card</option>
            <option value="bank">Bank Account</option>
          </select>
        </p>

        <ChargifyForm paymentType={this.state.paymentType}/>
      </div>
    );
  }
}

export default App;

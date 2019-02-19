import React, { Component } from 'react';

class ChargifyForm extends Component {
  constructor(props) {
    super(props);
   
    this.handleSubmit = this.handleSubmit.bind(this);
    this.chargifyForm = React.createRef();
    this.state = {token: ''};
  } 

  handleSubmit(e) {
    e.preventDefault();

    this.chargify.token(
      this.chargifyForm.current,

      (token) => {
        console.log('{host} token SUCCESS - token: ', token);
        this.setState({token: token});
      },

      (error) => {
        console.log('{host} token ERROR - err: ', error);
      }
    );
  }

  componentDidMount() {
    this.chargify = new window.Chargify();

    this.chargify.load({
      // selector where the iframe will be included in the host's HTML (i.e. '#chargify-form')
      // optional if you have a `selector` on each and every field
      selector: '#chargify-form',
  
      // (i.e. '1a2cdsdn3lkn54lnlkn')
      publicKey: 'MY_PUBLIC_KEY',
  
      // form type (possible values: 'card' or 'bank')
      type: this.state.type || 'card',
  
      // points to your Chargify site
      serverHost: 'https://acme.chargify.com'
    });
  }

  componentDidUpdate(prevProps) {  
    if (prevProps.type !== this.props.type) {
      this.chargify.load({type: this.props.type});
      this.setState({token: ''});
    }
  }

  componentWillUnmount() {
    this.chargify.unload();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} ref={this.chargifyForm}>
        <div id="chargify-form"></div>
        <label>
          Hidden Token: <input id="host-token" disabled value={this.state.token}/>
        </label>
        <p>
          <button type="submit">Submit Host Form</button>
        </p>
      </form>
    )
  }
}

export default ChargifyForm;

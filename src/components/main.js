require('normalize.css/normalize.css');

import React from 'react';
// import ReactDOM from 'react-dom';

class appMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'jack',
      age: 21
    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <h1>hellllllllllllllllllllllllllllllllllllllllllllo!</h1>
    );
  }
}

export default appMain;

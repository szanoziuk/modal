import React, { Component } from 'react';
import 'typeface-roboto';
import Main from './components/main';

class App extends Component {

  state = {
    open: false
  };

  modalHandle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <Main 
          onClick={ this.modalHandle }
          open={ this.state.open }
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import 'typeface-roboto';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import ModalHeader from './components/modal-header';
import ModalContent from './components/modal-content';

const styles = theme => ({
  root: {
    position: 'absolute',
    left: 500,
    top: 100,
    width: theme.spacing.unit * 40,
    height: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto'

  },
  paper: {
    padding: 20
  },
  button: {
    margin: 20
  }
});

class App extends Component {

  state = {
    open: false
  };

  modalHandle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          className={ classes.button }
          color="primary"
          variant="contained"
          onClick={ this.modalHandle }
        >
          Toggle Modal
        </Button>
        <Modal open={this.state.open} className={ classes.root } onEscapeKeyDown={ this.modalHandle }>
          <Paper className={ classes.paper }>
            <ModalHeader onClick={ this.modalHandle } />
            <ModalContent onClick={ this.modalHandle } />
          </Paper>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(App);

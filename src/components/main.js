import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import propTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import ModalContent from './modal-content';
import ModalHeader from './modal-header';

const styles = theme => ({
    root: {
        position: 'absolute',
        left: 500,
        top: 100,
        width: theme.spacing.unit*40,
        height: theme.spacing.unit*60,
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

class Main extends Component {
    render() {
    const { open, onClick, classes } = this.props;
        return(
            <div>
                <Button 
                    className={ classes.button }
                    color="primary"
                    variant="contained"
                    onClick={ onClick }
                >
                    Open Modal 
                </Button>
                <Modal open={open} className={classes.root} onEscapeKeyDown={ onClick }>
                    <Paper className={ classes.paper }>
                        <ModalHeader onClick={ onClick }/>
                        <ModalContent onClick={ onClick }/>
                    </Paper>
                </Modal>
            </div>
        );
    }
}

Main.propTypes = {
    open: propTypes.bool.isRequired,
    onClick: propTypes.func.isRequired,
    classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Main);
import React from 'react';
import propTypes from 'prop-types';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const styles = {
    root: {
        width: '80%',
        margin: '0 auto',
        backgroundColor: grey[300]
    },
    grow: {
        flexGrow: 1,
        marginLeft: -10,
    }
};

const ModalHeader = ({ onClick, classes }) => {
    return(
        <Toolbar variant="dense" className={ classes.root }>
            <Typography 
                variant="subheading"
                color="inherit"
                className={ classes.grow }
            > 
                Структура номеров 
            </Typography>
            <IconButton color="inherit" onClick={ onClick }>
                <Close />
            </IconButton>
        </Toolbar>
    );
};


ModalHeader.propTypes = {
    classes: propTypes.object.isRequired,
    onClick: propTypes.func.isRequired
};

export default withStyles(styles)(ModalHeader);
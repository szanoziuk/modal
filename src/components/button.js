import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        background: 'yellow'
    }
}

const MyButton = ( props ) => {
    const { classes } = props;
    return(
        <Button classes={{ root: classes.root }}>
            Hello Test
        </Button>
    );

}


export default withStyles( styles ) ( MyButton );
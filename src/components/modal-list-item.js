import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const styles = {
    input: {
        width: 50,
        marginLeft: 15,
        marginRight: 10
    },
    select: {
        width: 100
    },
    close: {
        color: red[500]
    }
};


class ModalListItem extends PureComponent {

    handleChange = ( e ) => {
        const { index, commonHandleChange } = this.props;
        commonHandleChange(index, { [e.target.name]: e.target.value });
    }
    
    render() {
        const { classes, index, select, number, itemDelete } = this.props;
        const selectItems = ['None', 'Single', 'Twin', 'Tripple', 'Quadro'];
        return(
            <ListItem dense>
                <FormControl>
                    <Select 
                        name="select"
                        className={ classes.select }
                        onChange={ this.handleChange }
                        value={ select }
                    >
                        { 
                            selectItems.map( ( el, i ) => 
                                <MenuItem key={ i } value={ el }>
                                    { el }
                                </MenuItem>) 
                        }
                   </Select>
                </FormControl>
                <FormControl>
                    <Input
                        name="number" 
                        value={ number } 
                        type="number" 
                        className={ classes.input }
                        onChange={ this.handleChange }
                    />
                </FormControl>
                <IconButton className={ classes.close } onClick={ () => itemDelete( index ) }>
                    <Close />
                </IconButton>
            </ListItem>

        );
    }
}

ModalListItem.propTypes = {
    classes: propTypes.object.isRequired,
    select: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
    number: propTypes.string,
    itemDelete: propTypes.func.isRequired,
    commonHandleChange: propTypes.func.isRequired
};

export default withStyles(styles)(ModalListItem);


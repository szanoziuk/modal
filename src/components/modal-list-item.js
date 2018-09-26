import React, { PureComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
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
        const { id, commonHandleChange } = this.props;
        commonHandleChange(id, { [e.target.name]: e.target.value });
    }
    
    render() {
        const { classes, id, select, number, itemDelete } = this.props;
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
                            selectItems.map( ( item, i ) => 
                                <MenuItem key={ i } value={ item }>
                                    { item }
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
                <IconButton className={ classes.close } onClick={ () => itemDelete(id) }>
                    <Close />
                </IconButton>
            </ListItem>

        );
    }
}

ModalListItem.propTypes = {
    classes: propTypes.object.isRequired,
    select: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    number: propTypes.number,
    itemDelete: propTypes.func.isRequired,
    commonHandleChange: propTypes.func.isRequired
};

export default withStyles(styles)(ModalListItem);


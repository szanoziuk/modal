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
    
    selectChange = (e) => {
        const { id, handleSelect } = this.props;
        const select = e.target.value;
        handleSelect( id, select );
    }
    
    inputChange = (e) => {
        const { id, handleInput } = this.props;
        const number = +e.target.value;
        handleInput( id, number );
    }
    
    render() {
        const { classes, id, select, number, itemDelete } = this.props;
        const selectItems = ['None', 'Single', 'Twin', 'Tripple', 'Quadro'];
        return(
            <ListItem dense>
                <FormControl>
                    <Select 
                        className={ classes.select }
                        onChange={ this.selectChange }
                        value={ select }
                    >
                        { 
                            selectItems.map( ( item, i ) => 
                                <MenuItem 
                                    key={ i }
                                    value={ item }
                                >
                                    { item }
                                </MenuItem>) 
                        }
                   </Select>
                </FormControl>
                <FormControl>
                    <Input 
                        value={ number } 
                        type="number" 
                        className={ classes.input }
                        onChange={ this.inputChange }
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
    handleInput: propTypes.func.isRequired,
    handleSelect: propTypes.func.isRequired
};

export default withStyles(styles)(ModalListItem);


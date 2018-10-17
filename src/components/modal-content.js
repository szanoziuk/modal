import React, { Component } from 'react';
import propTypes from 'prop-types';

import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles'; 

import ModalListItem from './modal-list-item';

const styles = {
    btn: {
        marginLeft: 10
    }
};

class ModalContent extends Component {

    state = {
        data: []
    }

    componentWillMount() {
        localStorage.getItem('data') && this.setState({ 
            data: JSON.parse(localStorage.getItem('data')) 
        });
    };

    componentDidMount() {
        if( localStorage.getItem('data') ) {
            console.log( 'Data was obtained from localStorage.' )
        } else {
            fetch('data.json')
                .then( res => res.json() )
                .then( data => this.setState({ data }) )
                .catch( err => console.log(err) );
            console.log( 'Data fetched.' );
        }
    };

    addNewItem = () => {
        const newItem = {
            select: "None",
            number: "0" 
        };

        const items = [ ...this.state.data, newItem ];

        this.setState({ data: items });
    };
    
    itemDelete = ( index ) => {
        const items = [
            ...this.state.data.slice(0, index),
            ...this.state.data.slice(index + 1)
        ];

        this.setState({ data: items }); 
    };
    
    commonHandleChange = ( index, myObj ) => {
        const items = this.state.data.map( ( item, i ) => {
            if( index !== i ) { 
                return item;
            }
            return { ...item, ...myObj };
        });
       
        this.setState({ data: items });
    };

    saveItems = () => {
        localStorage.setItem('data', JSON.stringify(this.state.data));
        this.props.onClick();
    };

    render() {
        const { onClick, classes } = this.props;
        const children = this.state.data.map( (item,i) => 
            <ModalListItem 
                itemDelete={ this.itemDelete }
                commonHandleChange={ this.commonHandleChange }
                index={ i } 
                select={ item.select } 
                number={ item.number } 
                key={ i }
            />);
        return(
            <form>
                <List>
                    { children }
                </List>
                <Button 
                    className={classes.btn}
                    color="primary"
                    onClick={ this.addNewItem }
                > Добавить </Button>
                <Toolbar variant="dense">
                    <Button 
                        color="primary"
                        variant="contained"
                        onClick={ this.saveItems }
                    > Cохранить </Button>
                    <Button className={classes.btn} onClick={ onClick }> Отмена </Button>
                </Toolbar>
            </form>
        );
    }
};

ModalContent.propTypes = {
    onClick: propTypes.func.isRequired,
    classes: propTypes.object.isRequired
};

export default withStyles(styles)(ModalContent);





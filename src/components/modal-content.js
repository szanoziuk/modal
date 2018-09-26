import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import ModalListItem from './modal-list-item';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import { getUniqueId } from '../helpers';
import { findIndex } from 'lodash';

const styles = {
    btn: {
        marginLeft: 10
    }
};

class ModalContent extends Component {
    state = {
        data: []
    };

    componentWillMount() {
        localStorage.getItem('data') && this.setState({ 
            data: JSON.parse(localStorage.getItem('data')) 
        });
    }

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
    }

    addNewItem = () => {
        const id = + getUniqueId( this.state.data );
        const newItem = [{ id: id, select: "None", number: 0 }];
        this.setState({ data: [ ...this.state.data, ...newItem ] }); 
    };
    
    itemDelete = ( id ) => {
        this.setState({ data: this.state.data.filter( el => el.id !== id ) });
    };
    
    commonHandleChange = ( id, myObj ) => {
        const obj = this.state.data.find((el) => el.id === id);
        const index = findIndex(this.state.data, el => el.id === id);
        const newObj = { ...obj, ...myObj };
        const newArr = this.state.data;
        newArr[index] = newObj
        this.setState({ data: newArr });
    }

    saveItems = () => {
        localStorage.setItem('data', JSON.stringify(this.state.data));
        this.props.onClick();
    };

    render() {
        const { onClick, classes } = this.props;
        const children = this.state.data.map( ( el, i ) => 
            <ModalListItem 
                itemDelete={ this.itemDelete }
                commonHandleChange={ this.commonHandleChange }
                select={ el.select } 
                number={ el.number }
                id={ el.id }
                key={ i }
            />);
        return(
            <form action="#">
                <List>
                    { children }
                </List>
                <Button 
                    className={classes.btn}
                    color="primary"
                    onClick={ this.addNewItem }
                > 
                    Добавить
             </Button>
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





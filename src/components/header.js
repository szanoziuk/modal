import React, { Component } from 'react';
import propTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class AppHeader extends Component {

  state = {
    auth: true,
    anchorEl: null
  };

  handleMenu = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render() {

    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean( anchorEl );

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography className={classes.grow} variant="title" color="inherit"> 
                My Material-UI App
            </Typography>
            { auth && (
              <div>
                <IconButton 
                  aria-owns={ open ? 'menu-appbar': null}
                  aria-haspopup="true"
                  onClick={ this.handleMenu }
                  color="inherit" 
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={ anchorEl }
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={ open }
                  onClose={ this.handleClose }
                >
                  <MenuItem> Profile </MenuItem>
                  <MenuItem> My account </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>    
        </AppBar>
      </div>
      );
  }
}

AppHeader.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(AppHeader);
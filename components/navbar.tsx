import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React, { Component } from 'react'
import { route } from '../utils/const'
import MenuIcon from '@mui/icons-material/Menu';

interface IProps { }
interface IState {
    anchorEl: null | HTMLElement,
    open: boolean
}

export default class Navbar extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = { anchorEl: null, open: false }

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)

    }

    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        this.setState({
            anchorEl: event.currentTarget,
            open: true
        })
    };

    handleClose() {
        this.setState({
            anchorEl: null,
            open: false
        })
    };

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton
                            id='menu-button'
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={this.handleClick}>
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            onClose={this.handleClose}
                            keepMounted
                            MenuListProps={{
                                'aria-labelledby': 'menu-button',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}>
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Menu
                        </Typography>
                        {route.map((routeItem) =>
                            <Button color="inherit" key={routeItem.path}>
                                <Link href={routeItem.path}>{routeItem.name}</Link>
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }
}

import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material'
import Link from 'next/link'
import React, { Component, ReactElement } from 'react'
import { route } from '../utils/const'
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';

interface IProps {
    children?: React.ReactElement
    window?: () => Window
}
interface IState {
    anchorEl: null | HTMLElement
    open: boolean
    mobileOn: boolean
}

function HideOnScroll(props: IProps) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default class Navbar extends Component<IProps, IState> {

    protected drawerWidth: number = 400;

    constructor(props: IProps) {
        super(props);

        this.state = {
            anchorEl: null,
            open: false,
            mobileOn: false
        }

        // Нужно прокидывать context чтобы был доступен this.state
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleDrawerOn = this.handleDrawerOn.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
    }

    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        this.setState({
            anchorEl: event.currentTarget,
            open: true
        })
    }

    handleClose() {
        this.setState({
            anchorEl: null,
            open: false
        })
    }

    handleDrawerOn() {
        this.setState({
            mobileOn: true
        })
    }

    handleDrawerClose() {
        this.setState({
            mobileOn: false
        })
    }

    drawer() {
        return (
            <Box onClick={this.handleDrawerClose} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    Menu
                </Typography>
                <Divider />
                <List>
                    {route.map((routeItem) =>
                        <ListItem key={routeItem.path} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText>
                                    <Link href={routeItem.path}>{routeItem.name}</Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Box>
        )
    }

    render() {
        return (
            <HideOnScroll {...this.props}>
                <AppBar>
                    <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Box sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: '1' }}>
                            <IconButton
                                id='menu-button'
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={this.handleDrawerOn}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Typography variant="h6" component="div">
                                Menu
                            </Typography>
                        </Box>


                        <Drawer
                            variant="temporary"
                            open={this.state.mobileOn}
                            onClose={this.handleDrawerClose}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: this.drawerWidth },
                            }}
                        >
                            <>{this.drawer()}</>
                        </Drawer>


                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {route.map((routeItem) =>
                                <Button color="inherit" key={routeItem.path}>
                                    <Link href={routeItem.path}>{routeItem.name}</Link>
                                </Button>
                            )}
                        </Box>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="Account of current user"
                            //aria-controls={}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>

                        <Menu
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            onClose={this.handleClose}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            anchorOrigin={{
                                horizontal: 'right',
                                vertical: 'bottom'
                            }}>
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        )
    }
}

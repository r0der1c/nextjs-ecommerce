import { faShoppingCart, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Searchtextfield from 'components/Layout/SearchTextField';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function Header(props) {
    return <ElevationScroll>
        <AppBar position="static" color="inherit">
            <Toolbar>
                Icon
                <Box sx={{ flexGrow: 1 }} />
                <Searchtextfield />
                <Button color="inherit" sx={{ border: 1, borderColor: 'grey.400' }}>
                    <FontAwesomeIcon icon={faUserLock} style={{ fontSize: "1rem" }} />
                    <Typography sx={{ pl: 1, display: { xs: "none", md: "inherit" } }}>
                        {"Iniciar Sesión"}
                    </Typography>
                </Button>
                <Button color="inherit">
                    <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: "1rem" }} />
                    <Typography sx={{ pl: 1, display: { xs: "none", md: "inherit" } }}>
                        {"$0.00"}
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    </ElevationScroll>
}

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

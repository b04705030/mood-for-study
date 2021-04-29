import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// import { FormattedMessage } from 'react-intl';
// import { LOCALE_OPTIONS } from '../i18n/locale-settings';
const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'black',
        zIndex: 1201
    }
}));

function Navbar({ showOverlay }) {
    const classes = useStyles();

    const handleOnChannelsClicked = (_) => {
        showOverlay();
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Button color="inherit">
                    Mood for Study
                </Button>
                <Button color="inherit" onClick={handleOnChannelsClicked}>
                    Channels
                </Button>
                {/* <div style={{ flexGrow: 1 }}></div> */}
                {/* <Button color="inherit" onClick={() => dispatch(setLocale(LOCALE_OPTIONS.zh))}>中文</Button>
                <Button color="inherit" onClick={() => dispatch(setLocale(LOCALE_OPTIONS.en))}>English</Button> */}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
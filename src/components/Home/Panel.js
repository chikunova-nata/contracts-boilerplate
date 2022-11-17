import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import logo from "./eth-logo.svg";

const styles = theme => ({
    home: {
        textAlign: "center"
    },
    homeLogo: {
        height: "80px"
    },
    homeHeader: {
        height: "150px",
        padding: "20px"
    },
    homeTitle: {
        fontSize: "1.5em"
    },
    homeIntro: {
        fontSize: "large"
    },
    InputWrapper: {
        alignItems: "center",
        justifyContent: "center"
    },
    addressInput: {
        marginLeft: "10px"
    },
    scanButton: {
        padding: "14px 18px"
    },
    error: {
        color: "red"
    }
});

const component = ({ classes, handleAddress, updateAddress, formatError }) => (
    <React.Fragment>
        <div className={classes.homeHeader}>
            <h1 className={classes.homeTitle}>Explore a contract</h1>
            <img src={logo} className={classes.homeLogo} alt="logo" />
        </div>
        <p className={classes.homeIntro}>
            To get started, enter a smart contract address
        </p>
        {formatError && (
            <p className={classes.error}>
                Please enter a valid Ethereum address
            </p>
        )}
        <Grid container className={classes.InputWrapper}>
            <Grid item xs={8}>
                <TextField
                    id="outlined-name"
                    label="Ethereum Address"
                    fullWidth
                    onChange={updateAddress}
                    className={classes.addressInput}
                    margin="normal"
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={2} className={classes.scanButton}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddress}
                >
                    <SearchIcon />
                    Scan
                </Button>
            </Grid>
        </Grid>
    </React.Fragment>
);

component.propTypes = {
    classes: PropTypes.object.isRequired,
    formatError: PropTypes.bool.isRequired,
    handleAddress: PropTypes.func.isRequired,
    updateAddress: PropTypes.func.isRequired
};

export default withStyles(styles)(component);

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

const component = ({ classes, contractInt }) => (
    <React.Fragment>
        {contractInt !== undefined && (
            <Grid container className={classes.InputWrapper}>
                <Grid item xs={6}>
                    <h2>Methods:</h2>
                    {console.log(contractInt.abi.methods)}
                    {Object.keys(contractInt.abi.methods).map(method => {
                        return <p> {method} </p>;
                    })}
                </Grid>
                <Grid item xs={6}>
                    {/* <h2>Tokens: {contractInt.abi.methods.totalSupply().call().then( tokens => {
              return(<p> {tokens} </p>)
            })}</h2>*/}
                </Grid>
            </Grid>
        )}
    </React.Fragment>
);

component.propTypes = {
    classes: PropTypes.object.isRequired,
    contractInt: PropTypes.object
};

export default withStyles(styles)(component);

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Panel from "./Panel";
import Data from "./Data";

const styles = theme => ({
    home: {
        textAlign: "center"
    }
});

const component = ({
    classes,
    handleAddress,
    updateAddress,
    formatError,
    contractInt
}) => (
    <div className={classes.home}>
        <Panel
            handleAddress={handleAddress}
            updateAddress={updateAddress}
            formatError={formatError}
        />
        <Data contractInt={contractInt} />
    </div>
);

component.propTypes = {
    classes: PropTypes.object.isRequired,
    formatError: PropTypes.bool.isRequired,
    handleAddress: PropTypes.func.isRequired,
    updateAddress: PropTypes.func.isRequired,
    contractInt: PropTypes.object
};

export default withStyles(styles)(component);

import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import { connect } from "react-redux";
import { storeWeb3 } from "../../redux/actions/web3";
import * as web3Service from "../../utils/web3Service";
import Layout from "../../components/Layout/Layout";
import { HOME } from "../../constants/routes";

const mapDispatchToProps = dispatch => ({
    storeWeb3: web3 => dispatch(storeWeb3(web3))
});

class Container extends Component {
    componentDidMount() {
        web3Service.setWeb3().then(web3 => {
            this.props.storeWeb3(web3);
        });
    }

    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    exact
                    component={() => <Redirect to={HOME} />}
                />
                <Route component={Layout} />
            </Switch>
        );
    }
}

export default connect(
    undefined,
    mapDispatchToProps
)(Container);

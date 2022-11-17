import React, { Component } from "react";
import { connect } from "react-redux";
import * as web3Service from "../../utils/web3Service";
import Home from "../../components/Home/Home";

const mapStateToProps = state => ({
    web3: state.data.web3State.web3
});

class Container extends Component {
    state = {
        address: "",
        formatError: false,
        contract: {}
    };

    handleAddress = () => {
        if (!this.props.web3.utils.isAddress(this.state.address)) {
            this.setState({ formatError: true });
        } else {
            web3Service
                .getContract(this.props.web3, this.state.address)
                .then(contract => {
                    this.setState({ contract });
                });
        }
    };

    updateAddress = event => {
        event.persist();
        this.setState({ address: event.target.value });
    };

    render() {
        return (
            <Home
                handleAddress={this.handleAddress}
                updateAddress={this.updateAddress}
                formatError={this.state.formatError}
                contractInt={this.state.contract.jsonInterface}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    undefined
)(Container);

import React, { Component } from 'react';
import {Panel, Button, Form, FormControl, FormGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import './ShopItem.css'

class ShopItem extends Component {
    constructor (props) {
        super(props);

        this.state = {quantity: 1};
    }

    handleChange = () => {
        
    }

    doIncrement = () => {
        this.setState({quantity: this.state.quantity+1});
    }

    doDecrement = () => {
        if (this.state.quantity > 1)
            this.setState({quantity: this.state.quantity-1});
    }

    doBuy = () => {
        this.props.dispatch({type: "UPDATE_CHECK", value: this.state.quantity});
        console.info("Add checkout dispatch with: "+this.props.title+" - "+this.state.quantity);
        this.props.dispatch({type: "ADD_CHECKOUT", value: this.props.title, aq: this.state.quantity});
    }

    render () {
        return (
            <Panel className="shopitem">
                <Panel.Heading>{this.props.title}</Panel.Heading>
                <Panel.Body>{this.props.body}</Panel.Body>
                <Panel.Footer className="orderpanel">
                    <Form>
                        <FormGroup className="orderform">
                            <Button onClick={this.doDecrement}>-</Button>
                            <FormControl
                                className="qinput"
                                type="text"
                                value={this.state.quantity}
                                // bsSize="sm"
                                // placeholder="Enter text"
                                // onChange={this.handleChange}
                            />
                            <Button onClick={this.doIncrement}>+</Button>
                            <Button className="buybutton" bsStyle="success" onClick={this.doBuy}>Buy</Button>
                        </FormGroup>
                    </Form>
                </Panel.Footer>
            </Panel>
        );
    }
}

export default connect()(ShopItem);
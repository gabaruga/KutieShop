import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
      count: state.count,
      items_check: state.items_check
    };
  }

class CheckOut extends Component {
    render() {
        console.info(this.props.items_check.length)
        var itemlist = [];
        for (var i=0; i<this.props.items_check.length; i++) {
            console.info("Item to list: "+this.props.items_check[i]);
            itemlist.push(<div key={i}>{this.props.items_check[i]}</div>);
        }


        return (
            <div>
                <Panel>
                    <Panel.Heading>Total: {this.props.count}</Panel.Heading>                   
                    <Panel.Body>{itemlist}</Panel.Body>
                    <Panel.Footer><Button>Pay</Button></Panel.Footer>
                </Panel>
            </div>
        );
    }
}

export default connect(mapStateToProps)(CheckOut);
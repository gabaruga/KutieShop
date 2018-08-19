import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import './CheckOut.css'

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
            itemlist.push(<div key={i}>{this.props.items_check[i][0]} : {this.props.items_check[i][1]}</div>);
        }


        return (
            <div className="checkout">
                <Panel>
                    <Panel.Heading>Ваш рахунок</Panel.Heading>                   
                    <Panel.Body>{itemlist}</Panel.Body>
                    <Panel.Footer className="clearfix"><Button className="pull-right">Заплатити грошенят</Button></Panel.Footer>
                </Panel>
            </div>
        );
    }
}

export default connect(mapStateToProps)(CheckOut);
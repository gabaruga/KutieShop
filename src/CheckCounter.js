import React, {Component} from 'react';
import {Badge} from 'react-bootstrap';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

class CheckCounter extends Component {    
    render() {
        return (<span>Кошик  <Badge>{this.props.count}</Badge></span>);
    }
}

export default connect(mapStateToProps)(CheckCounter);
import React, {Component} from 'react'
import ShopItem from './ShopItem'

class DBReader extends Component {
    constructor(props) {
        super(props);

        this.state = {items:[]};
    }

    componentDidMount() {
        var __items = [];

        fetch(`http://debian.loc:5000/${this.props.collection}`, {
            method: "GET",
            mode: "cors"
        })
        .then(res => {return res.json()})        
        .then(data => {
            for (var item of data._items) {
                //  console.info(item.title);
                __items.push(<ShopItem key={item._id} title={item.title} body={"Ціна: "+item.price}/>);
            }            
        })
        .then(() => {
            // console.info(__items);
            this.setState({items: __items});
        }
        );
    }

    render () {
        console.info(this.state.items);
        return (
            <div className="shopwrap">{this.state.items}</div>
        );
    }
}

export default DBReader;

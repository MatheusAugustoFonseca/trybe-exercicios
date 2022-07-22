import React from 'react';
import './'

class Order extends React.Component {
  render() {
    const { product, price } = this.props.order;

    return (
      <div className="order">
        <p> {this.props.order.user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;
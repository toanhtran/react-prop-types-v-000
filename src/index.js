// Code Goes Here
import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render(){
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
            <li>{this.props.size}</li>
            <li>{this.props.scoops.legnth} scoops: {this.props.scoops.join(', ')}</li>
            <li>Order by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderAt}.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
};

Order.propTypes = {};

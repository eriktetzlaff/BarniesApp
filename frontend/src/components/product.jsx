import React, { Component } from 'react';

class Product extends Component {
    state = {  } 
    render() { 
        return <div className="Product" styles={{width: '18rem'}}>
        <img src={"/assets/img/"+this.props.image} className="Product-img-top" alt="..."/>
        <div className="Product-body">
          <h5 className="Product-title">{this.props.title}</h5>
          <p className="Product-text">{this.props.description}</p>
          <a href="/" className="btn btn-primary">Details</a>
        </div>
      </div>;
    }
}
 
export default Product;
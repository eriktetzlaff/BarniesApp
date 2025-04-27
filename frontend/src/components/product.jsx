import React, { Component } from 'react';

class Product extends Component {
    state = {  } 
    render() { 
        return <div className="Product" styles={{width: '18rem'}}>
        <img src={"/assets/img/"+this.props.image} className="Product-img-top" alt="..."/>
        <div className="Product-body">
          <h5 className="Product-title">{this.props.title}</h5>
          <p className="Product-text">{this.props.description}</p>
          <button onClick={this.props.onAdd} className="btn btn-primary">Zum Warenkorb hinzufügen</button>
        </div>
      </div>;
    }
}
 
export default Product;
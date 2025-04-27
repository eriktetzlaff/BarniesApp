import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import './index.css';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        let existingItem = this.state.items.find(item => item.name === name)
        if (existingItem) {
            existingItem.amount++;
            existingItem.price = existingItem.price*2;
        } else {
            currentItems.push({
                amount,
                name,
                price
            });
        }
        this.setState({ items: currentItems });
        console.log(this.state);

    }
    render() {
        return <React.Fragment>
            <Navbar />
            <div className='main-container'>
                <div className='product-container'>
                    <Product onAdd={() => this.addItem(1, "Hund", 4.9)} image="dogs.jpg" title="Hund" description="Das ist ein Hund" />
                    <Product onAdd={() => this.addItem(1, "Katze", 7.99)} image="cat.jpg" title="Katzen" description="Das ist eine Katze" />
                    <Product onAdd={() => this.addItem(1, "Löwe", 18.99)} image="lion.jpg" title="Löwen" description="Das ist ein Löwe" />
                </div>
                <ShoppingCart items={this.state.items} />
            </div>
        </React.Fragment>;
    }
}

export default App;
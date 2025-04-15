import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import './index.css';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className='product-container'>
                <Product image="dogs.jpg" title="Hund" description="Das ist ein Hund"/>
                <Product image="cat.jpg" title="Katzen" description="Das ist eine Katze"/>
                <Product image="lion.jpg" title="Löwen" description="Das ist ein Löwe"/>
            </div>
        </React.Fragment>;
    }
}
 
export default App;
import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar'

class App extends React.Component {
      constructor(){
        super();
        this.state = {
            products : [
                {
                    id : 1,
                    price : 999,
                    title: 'Mobile Phone',
                    Qty: 1,
                    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80'
                },
                {
                    id: 2,
                    price : 1999,
                    title: 'Watch',
                    Qty: 2,
                    img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
                },
                {
                    id: 3,
                    price : 9999,
                    title: 'Laptop',
                    Qty: 1,
                    img: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        console.log("Hey please increase the Quantity of" , product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].Qty += 1;

        this.setState({
            products : products // we can also use shorthand by simply writing products instead of 
                              //products : products
        })
    }

    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        if(products[index].Qty === 0){
            return;
        }else{
            products[index].Qty -= 1;
        }

        this.setState({
            products
        })
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id); // it will return us an array of items whose id does not match the id od product to be deleted

        this.setState({
            products : items
        })
    }

    getCartCount = () => {
      const { products } =  this.state;
      
      let count = 0;

      products.forEach( (product) => {
        count += product.Qty;
      });

      return count;
    }

    getCartTotal = () => {
      const { products } = this.state;

      let total = 0;

      products.map((product) => {
        total = total + product.Qty * product.price;
      })

      return total;
    }

  
    render(){
      const { products } = this.state;
      return (
        <div className="App">
          <Navbar count = {this.getCartCount()} />
          <Cart 
            products = { products }
            onIncreaseQuantity = { this.handleIncreaseQuantity }
            onDecreaseQuantity = { this.handleDecreaseQuantity }
            onDeleteProduct = { this.handleDeleteProduct }
          />
          <div style = { {padding : 10 ,fontSize: 20} } >Total : Rs. {this.getCartTotal()} </div>
        </div>
      );
    }
}

export default App;

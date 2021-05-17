import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
      constructor(){
        super();
        this.state = {
            products : [],
            loading : true
        }

        this.db = firebase.firestore();
     }

     componentDidMount(){
      //  firebase
      //   .firestore()
      //   .collection('products')
      //   .get()
      //   .then((snapshot) => {
      //     console.log('SNAPSHOT',snapshot);

      //     snapshot.docs.map((doc) => {
      //       console.log(doc.data());
      //     });

      //     const products = snapshot.docs.map((doc) => {
      //       const data = doc.data();
      //       data['id'] = doc.id;
      //       return data;
      //     })
      //     this.setState({
      //       products,
      //       loading: false
      //     })
      //   })

      this.db
        .collection('products')
        .onSnapshot((snapshot) => {
          console.log('SNAPSHOT',snapshot);

          // snapshot.docs.map((doc) => {
          //   console.log(doc.data());
          // });

          const products = snapshot.docs.map((doc) => {
            const data = doc.data();
            data['id'] = doc.id;
            return data;
          })
          this.setState({
            products,
            loading: false
          })
        })

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
    // This was add product button function...
    // addProduct = () => {
    //   this.db
    //     .collection('products')
    //     .add({
    //       img : '',
    //       price: 900,
    //       Qty: 2,
    //       title: 'Washing Machine'
    //     })
    //     .then((docRef) => {
    //       console.log('Product has been added' ,docRef);
    //     })
    //     .catch((error) => {
    //       console.log('Error: ', error);
    //     })
    // }

  
    render(){
      const { products , loading } = this.state;
      return (
        <div className="App">
          <Navbar count = {this.getCartCount()} />
          {/* <button onClick = { this.addProduct } style = {{padding: 20, fontSize: 20}} >Add a Product</button> */}
          <Cart 
            products = { products }
            onIncreaseQuantity = { this.handleIncreaseQuantity }
            onDecreaseQuantity = { this.handleDecreaseQuantity }
            onDeleteProduct = { this.handleDeleteProduct }
          />
          { loading && <h1>LOADING PRODUCTS !!</h1> }
          <div style = { {padding : 10 ,fontSize: 20} } >Total : Rs. {this.getCartTotal()} </div>
        </div>
      );
    }
}

export default App;

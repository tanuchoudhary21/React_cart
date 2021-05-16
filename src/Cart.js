import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products : [
                {
                    id : 1,
                    price : 999,
                    title: 'Mobile Phone',
                    Qty: 1,
                    img: ''
                },
                {
                    id: 2,
                    price : 1999,
                    title: 'Watch',
                    Qty: 2,
                    img: ''
                },
                {
                    id: 3,
                    price : 9999,
                    title: 'Laptop',
                    Qty: 1,
                    img: ''
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

    render(){
        const { products } = this.state;
        return(
            <div className = "cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product = { product }  
                            key = { product.id }
                            onIncreaseQuantity = { this.handleIncreaseQuantity }
                            onDecreaseQuantity = { this.handleDecreaseQuantity }
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;
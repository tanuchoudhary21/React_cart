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
    render(){
        const { products } = this.state;
        return(
            <div className = "cart">
                {products.map((product) => {
                    return (
                        <CartItem 
                            product = { product }  
                            key = { product.id }
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;
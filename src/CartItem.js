import React from 'react';

class CartItem extends React.Component{

    render(){
        const { price , title, Qty } = this.props.product;
        return(
            <div className = "cart-item">
                <div className = "left-block">
                    <img style = {styles.image}/>
                </div>
                <div className = "right-block">
                    <div style = { { fontSize: 25 } }> {title} </div>
                    <div style = { { color: '#777' } }>Rs. {price} </div>
                    <div style = { { color: '#777' } }>QTY: {Qty} </div>
                    <div className = "cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt = "increase" 
                            className = "action-icons" 
                            src = "https://img-premium.flaticon.com/png/512/709/709484.png?token=exp=1621137042~hmac=255511c0d4c8dd01d415be59860c065e"
                            onClick = {() => this.props.onIncreaseQuantity(this.props.product)}    
                        />

                        <img 
                            alt = "decrease" 
                            className = "action-icons" 
                            src = "https://img-premium.flaticon.com/png/512/992/992683.png?token=exp=1621137162~hmac=8e7011260f74b5039532ad80098d5d01" 
                            onClick = { () => this.props.onDecreaseQuantity(this.props.product) }
                        />

                        <img 
                            alt = "delete" 
                            className = "action-icons" 
                            src = "https://img-premium.flaticon.com/png/512/1345/1345823.png?token=exp=1621137226~hmac=5a90d937205f7d5256b190384a1e1a4b" 
                        />

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}

export default CartItem;
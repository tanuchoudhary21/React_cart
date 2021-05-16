import React from 'react';

const Navbar = (props) => {
    return(
        <div style = { styles.nav } >
            <div style = { styles.cartIconContainer } >
                <img style = { styles.cartIcon }
                    src="https://img-premium.flaticon.com/png/512/3144/3144456.png?token=exp=1621150381~hmac=f7416e828048dbf37f8370d9b0e23686" 
                    alt="cart-icon" 
                />
                <span style = { styles.cartCount } > {props.count} </span>
            </div>
        </div>
    );
}


const styles = {
    cartIcon: {
        height : 32,
        marginRight : 20,
        marginTop : 16
    },
    nav : {
        height : 70,
        background : '#4267b2',
        display : 'flex',
        justifyContent : 'flex-end',
        alingnItems : 'center'
    },
    cartIconContainer : {
        position : 'relative'
    },
    cartCount : {
        background : 'yellow',
        borderRadius: '50%',
        padding : '4px 8px',
        position : 'absolute',
        right: 0,
        top : 4
    }
};

export default Navbar;
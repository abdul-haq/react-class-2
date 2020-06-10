import React from 'react'

function Shop(props) {
    return (
        <div>
            <p>{props.item} rate is : {props.price} per kg</p>
        </div>
    );
}
 
export default Shop;
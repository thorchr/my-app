import React from "react"

function Product(props) {
    return (
        <div className="product">
            <ul style={{listStyleType: "none"}}>
            	<li>Name: {props.name}</li>
            	<li>Price: {props.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}</li>
            	<li>Description: {props.description}</li>
            
            </ul>
           
        </div>
    )
}

export default Product
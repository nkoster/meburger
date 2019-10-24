import React from 'react'
import Aux from '../../../hoc/Aux'

const OrderSummary = props => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(key => (
                <li key={key}>
                    <span style={ { textTransform: 'capitalize' } }>{key}</span>:
                    {props.ingredients[key]}
                </li>
            )
        )
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your Burger Ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    )
}

export default OrderSummary

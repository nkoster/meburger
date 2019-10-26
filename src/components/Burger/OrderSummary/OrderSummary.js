import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = props => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(key =>
            <li key={key}>
                <span style={ { textTransform: 'capitalize' } }>{key}</span>:
                {props.ingredients[key]}
            </li>
        )
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your Burger Ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button
                buttonType='Danger'
                clicked={props.purchaseCancelled}
            >CANCEL</Button>
            <Button
                buttonType='Success'
                clicked={props.purchaseContinued}
            >CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary

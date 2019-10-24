import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.50,
    bacon: 1.00,
    cheese: 1.00,
    meat: 1.50
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 2,
        purchaseable: false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(key => ingredients[key])
            .reduce((sum, n) => sum + n, 0)
        this.setState({ purchaseable: sum > 0 })
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type]
        if (oldCount === 0) return
        const newCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })        
        this.updatePurchaseState(updatedIngredients)
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        
        Object.keys(disabledInfo).map(key => disabledInfo[key] = disabledInfo[key] <= 0)

        console.log(disabledInfo)

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                />
            </Aux>
        )
    }

}

export default BurgerBuilder

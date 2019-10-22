import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = props => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={ingrKey + i} type={ingrKey} />
                })
        })
        .reduce((arr, element) => {
            return arr.concat(element)
        }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Fill Me!</p>
    }
    console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger

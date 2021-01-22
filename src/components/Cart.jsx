import React from 'react'
import { Plus } from 'react-bootstrap-icons'
import Item from './Item.jsx'

const Cart = ({raceTitle}) => {
    return (
        <div className="cart">
            <h1>{raceTitle}</h1>
            <Item />
            <Item />
            <Item />
            <button className="add-button">
                <Plus color="#939DFF" size="40"/>
            </button>
        </div>
    )
}

export default Cart

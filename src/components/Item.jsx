import React from 'react'
import { PencilFill, TrashFill } from 'react-bootstrap-icons'
import hobbit from '../assets/images/hobbit.svg'

const Item = () => {
    return (
        <div className="item">
            <div className="avatar">
                <img src={hobbit} alt=""/>
            </div>
            <div className="user-name">
                namedeqwdd
            </div>
            <div className="controls">
                <button className="edit">
                    <PencilFill size="12"/>
                </button>
                <button className="delete">
                    <TrashFill size="12"/>
                </button>
            </div>
        </div>
    )
}

export default Item

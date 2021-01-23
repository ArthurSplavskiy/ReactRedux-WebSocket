import React, { useState } from 'react'
import Item from './Item.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../redux/actions.js'
import { v1 } from 'uuid'
import { Check2 } from 'react-bootstrap-icons'

const Cart = ({ race }) => {
    const users = useSelector(state => state)
    let [username, setUsername] = useState()
    let dispatch = useDispatch()

    return (
        <div className="cart">
            <h1>{race}</h1>
            {
                users.map(user => {
                    if(user.race === race) {
                        return <Item key={user.id} user={user} />
                    }
                }) 
            }
            <div className="item">
                <div className="user-name">
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        type="text"
                        placeholder="Введите никнейм"
                        className="input-name"
                    />
                </div>
                <div className="controls">
                    <button
                        className="add"
                        onClick={() => {
                                if(username) {
                                    dispatch(addUser({
                                        id: v1(),
                                        name: username,
                                        race: race
                                    }))
                                }
                                setUsername('');
                            }     
                        }
                    >
                        <Check2 size="12"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart

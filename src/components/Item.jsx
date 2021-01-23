import React, { useState } from 'react'
import { PencilFill, TrashFill, Check2 } from 'react-bootstrap-icons'

import Hobbit from '../assets/images/hobbit.svg'
import Human from '../assets/images/human.svg'
import Dworf from '../assets/images/dworf.svg'
import Elf from '../assets/images/elf.svg'

import { useDispatch } from 'react-redux'
import { deleteUser, updateUser } from '../redux/actions'

const Item = ({ user }) => {
    const [editable, setEditable] = useState(false)
    let [username, setUsername] = useState(user.name)
    const dispatch = useDispatch()

    let race = ''

    switch(user.race) {
        case 'Hobbit': 
            race = Hobbit
            break;
        case 'Human': 
            race = Human
            break;
        case 'Dworf': 
            race = Dworf
            break;
        case 'Elf': 
            race = Elf
            break;
        default: race = Human
    }

    return (
        <div className="item">
            <div className="avatar">
                <img src={race} alt=""/>
            </div>
            <div className="user-name">
                { editable ? <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        type="text"
                        className="input-name"
                    /> : user.name}
            </div>
            <div className="controls">
                <button
                    style={{marginRight: "6px"}}
                    className={ editable ? 'add' : 'edit' }
                    onClick={() => {
                            username ?
                                dispatch(updateUser({
                                    ...user,
                                    name: username
                                }))
                            : setUsername(user.name)
                            setEditable(!editable)
                        }
                    }
                >
                    { editable ? <Check2 size="12"/> : <PencilFill size="12"/> }
                </button>
                <button
                    className="delete"
                    onClick={() => dispatch(deleteUser(user.id))}
                >
                    <TrashFill size="12"/>
                </button>
            </div>
        </div>
    )
}

export default Item

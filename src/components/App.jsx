import React, { useState } from 'react'
import Cart from './Cart.jsx'
import { useDispatch } from 'react-redux'
import { wsUser } from '../redux/thunk.js'

const App = () => {
    const [status, setStatus] = useState(false)
    let dispatch = useDispatch()
    
    return (
        <>
            <div className="container pt-4">
                <div className="row pb-4">
                    <div className="col-ms-12 col-md-6 col-xl-8 d-flex justify-content-start align-items-center">
                        <div className="copyright">Created by Arthur Splavskiy</div>
                    </div>
                    <div className="col-ms-12 col-md-6 col-xl-4 d-flex justify-content-end align-items-center">
                        <button
                            className="async-button"
                            onClick={() => {
                                dispatch(wsUser())
                                setStatus(true)
                            }}
                            disabled={status}
                        >
                            Отримати з сервера
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xl-3">
                        <Cart race="Hobbit"/>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <Cart race="Human"/>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <Cart race="Dworf"/>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <Cart race="Elf"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

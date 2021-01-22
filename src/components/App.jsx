import React from 'react'
import Cart from './Cart.jsx'

const App = () => {
    return (
        <>
            <div className="container pt-4">
                <div className="copyright">Created by Arthur Splavskiy</div>
                <div className="row">
                    <div className="col-md-6 col-xl-3">
                        <Cart raceTitle="Hobbit"/>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <Cart raceTitle="Human"/>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <Cart raceTitle="Dworf"/>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <Cart raceTitle="Elf"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

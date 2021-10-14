import React, { useEffect, useState } from 'react';
import './Checkout.css'

const Checkout = () => {
    const [checkouts, setCheckouts] = useState([]);
    useEffect(() => {
        fetch('./checkout.json')
            .then(response => response.json())
            .then(data => setCheckouts(data))
    }, []);
    return (
        <div>
            <div className="checkout-head">
                <h1>Why you choose us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, eveniet?</p>
            </div>
            <div className="container">
                <div className="row">
                    {
                        checkouts.map(checkout => <div className="p-3 mb-5 card checkout-details bg-body col-lg-4">
                            <img src={checkout.img} className="card-img-top" alt="..." />
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <img src={checkout.icon} alt=''/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{checkout.title}</h5>
                                    <p className="card-text">{checkout.description}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Checkout;
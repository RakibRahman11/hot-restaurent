import React, { useEffect, useState } from 'react';

const Dinner = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('./dinner.json')
            .then(response => response.json())
            .then(data => setFoods(data))
        console.log();
    }, []);
    return (
        <div>
            <div className="container">
                    <div className="row">
                        {
                            foods.map(food => <div className="p-3 mb-5 rounded shadow card card-details bg-body col-lg-4">
                                <img src={food.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{food.title}</h5>
                                    <p className="card-text">{food.description}</p>
                                    <p>Price: ${food.price}</p>
                                    <button className='btn btn-outline-dark'>See details</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default Dinner;
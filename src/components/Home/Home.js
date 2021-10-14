import React, { useEffect, useState } from 'react';
import './Home.css'
import banner from '../../Images/bannerbackground.png'
import Checkout from '../Checkout/Checkout';

const Home = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('./breakfast.json')
            .then(response => response.json())
            .then(data => setFoods(data))
        console.log();
    }, []);
    return (
        <div>
            <div className="mt-5 banner">
                <div className="text-white card">
                    <img src={banner} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h1 className="mt-5 card-title text-dark">Best food waiting for your belly</h1>
                        <nav className="navbar navbar-light">
                            <div className="mx-auto mt-3 w-25">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search food items" aria-label="Username" />
                                    <span className="input-group-text" id="basic-addon1">Search</span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div>
                <div className="items-variation">
                    <p className="items">Breakfast</p>
                    <p className="items">Lunch</p>
                    <p className="items">Dinner</p>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            foods.map(food => <div className="p-3 mb-5 rounded shadow card card-details bg-body col-lg-4">
                                <img src={food.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{food.title}</h5>
                                    <p className="card-text">{food.description}</p>
                                    <p className="btn btn-outline-dark">${food.price}</p>
                                </div>
                            </div>)
                        }
                        <Checkout></Checkout>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
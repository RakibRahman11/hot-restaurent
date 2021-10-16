import React from 'react';
import './Home.css'
import banner from '../../Images/bannerbackground.png'
import { Link } from 'react-router-dom';

const Home = () => {
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
            <div className='items-variation'>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <Link className="items nav-link" to='/breakfast'>Breakfast</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="items nav-link" to='/lunch'>Lunch</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="items nav-link" to='/dinner'>Dinner</Link>
                    </li>
                </ul>
                {/* <div className="items-variation">
                    <ul class="nav justify-content-center">
                        <Link className="items" to='/breakfast'>Breakfast</Link>
                        <Link className="items" to='/lunch'>Lunch</Link>
                        <Link className="items" to='/dinner'>Dinner</Link>
                    </ul>

                </div> */}
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import "./services.scss"
import {motion} from 'framer-motion';

const Services = () => {
    return (
        <div className='services'>
            <motion.div className="textContainer">
                <p>I focus on helping your brand grow <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b>For Your</b> Business
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <div className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi facere debitis. Nisi nemo esse molestias accusamus ullam ab cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, omnis!
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi facere debitis. Nisi nemo esse molestias accusamus ullam ab cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, omnis!
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi facere debitis. Nisi nemo esse molestias accusamus ullam ab cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, omnis!
                    </p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi facere debitis. Nisi nemo esse molestias accusamus ullam ab cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, omnis!
                    </p>
                    <button>Go</button>
                </div>
            </motion.div>
        </div>
    );
};


export default Services;
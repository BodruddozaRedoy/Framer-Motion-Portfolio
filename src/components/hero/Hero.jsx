import React from 'react';
import "./hero.scss"
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x:0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">

            <motion.div variants={textVariants} className="textContainer">
                <motion.h2 variants={textVariants}>Bodruddoza Redoy</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer & Designer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>See the Latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <img variants={textVariants} src="/scroll.png" className='' alt="" />
            </motion.div>
        </div>
            <motion.div variants={textVariants} className="slidingTextContainer">
                Writer Content Creator Influencer
            </motion.div>
            <img src="/hero.png" className='imgContainer' alt="" />
        </div>
    );
};

export default Hero;
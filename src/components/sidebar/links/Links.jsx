import React from 'react';
import {motion} from 'framer-motion';

const variants = {
    open:{
        transition: {
            staggerChildren: 0.1
        }
    },
    closed:{
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}
const itemVariants = {
    open:{
        y: 0,
        opacity: 1
    },
    closed:{
        y: 50,
        opacity: 0
    }
}

const items = [
    "Home",
    "Services",
    "Portfolio",
    "Contact",
    "About",
]

const Links = () => {
    return (
        <motion.div variants={variants} className='links'>
            {items.map((item) => (
                <motion.a href={`#${item}`} variants={itemVariants} key={item} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>{item}</motion.a>
            ))}
        </motion.div>
    );
};

export default Links;
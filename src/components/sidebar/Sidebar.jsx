import React, { useState } from 'react';
import "./sidebar.scss"
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';
import {delay, motion} from 'framer-motion';

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",

            }
        },
        closed: {
            clipPath: 'circle(30px at 50px 46px)',
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 400,
                damping:40,
            }
        }
    }
    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    );
};

export default Sidebar;
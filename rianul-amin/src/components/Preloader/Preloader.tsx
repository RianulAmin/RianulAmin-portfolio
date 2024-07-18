'use client'
import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import { motion } from 'framer-motion';

export default function Preloader(){

    const [dimension, setDimension] = useState({width: 0, height:0});
    
    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    const slideUp = {
        initial: {
            y: "0"
        },
        exit: {
            y: "-100vh",
            transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
        }
    }

    return(
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 && 
            <>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
                <p className={styles.loaderText}>ehono bhabinai ki boshamu</p>
            </>
            }
        </motion.div>
    )
}
'use client'
import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import { motion } from 'framer-motion';

export default function Preloader() {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    const initialPath1 = `M0 0 
                        L${dimension.width} 0 
                        L${dimension.width} ${dimension.height + 300} 
                        A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${dimension.width * 0.82} ${dimension.height + 100} 
                        A${dimension.width * 0.08} ${dimension.width * 0.08} 0 0 1 ${dimension.width * 0.62} ${dimension.height + 50} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.52} ${dimension.height} 
                        A${dimension.width * 0.25} ${dimension.width * 0.25} 0 0 1 ${dimension.width * 0.42} ${dimension.height + 50} 
                        A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.32} ${dimension.height + 75} 
                        A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${-dimension.width * 0.1} ${dimension.height + 300} 
                        L0 0`;

    const targetPath1 = `M0 0 
                        L${dimension.width} 0 
                        L${dimension.width} ${dimension.height - 600} 
                        A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${dimension.width * 0.82} ${dimension.height - 400} 
                        A${dimension.width * 0.08} ${dimension.width * 0.08} 0 0 1 ${dimension.width * 0.62} ${dimension.height - 450} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.52} ${dimension.height - 500} 
                        A${dimension.width * 0.25} ${dimension.width * 0.25} 0 0 1 ${dimension.width * 0.42} ${dimension.height - 450} 
                        A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.32} ${dimension.height - 425} 
                        A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${-dimension.width * 0.1} ${dimension.height - 600} 
                        L0 0`;

                        const initialPath2 = `M0 0 
                        L${dimension.width} 0 
                        L${dimension.width} ${dimension.height + 700} 
                        A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.85} ${dimension.height + 500} 
                        A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${dimension.width * 0.75} ${dimension.height + 400} 
                        A${dimension.width * 0.18} ${dimension.width * 0.18} 0 0 1 ${dimension.width * 0.65} ${dimension.height + 300} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.55} ${dimension.height + 350} 
                        A${dimension.width * 0.12} ${dimension.width * 0.12} 0 0 1 ${dimension.width * 0.45} ${dimension.height + 300} 
                        A${dimension.width * 0.14} ${dimension.width * 0.14} 0 0 1 ${dimension.width * 0.35} ${dimension.height + 350} 
                        A${dimension.width * 0.16} ${dimension.width * 0.16} 0 0 1 ${dimension.width * 0.25} ${dimension.height + 450} 
                        A${dimension.width * 0.16} ${dimension.width * 0.16} 0 0 1 ${dimension.width * 0.15} ${dimension.height + 600} 
                        A${dimension.width * 0.1} ${dimension.width * 0.1} 0 0 1 ${-dimension.width * 0.1} ${dimension.height + 700} 
                        L0 0`;
    
    const targetPath2 = `M0 0 
                        L${dimension.width} 0 
                        L${dimension.width} ${dimension.height - 200} 
                        A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.85} ${dimension.height - 200} 
                        A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${dimension.width * 0.75} ${dimension.height - 300} 
                        A${dimension.width * 0.18} ${dimension.width * 0.18} 0 0 1 ${dimension.width * 0.65} ${dimension.height - 400} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.55} ${dimension.height - 350} 
                        A${dimension.width * 0.12} ${dimension.width * 0.12} 0 0 1 ${dimension.width * 0.45} ${dimension.height - 400} 
                        A${dimension.width * 0.14} ${dimension.width * 0.14} 0 0 1 ${dimension.width * 0.35} ${dimension.height - 350} 
                        A${dimension.width * 0.16} ${dimension.width * 0.16} 0 0 1 ${dimension.width * 0.25} ${dimension.height - 250} 
                        A${dimension.width * 0.16} ${dimension.width * 0.16} 0 0 1 ${dimension.width * 0.15} ${dimension.height - 100} 
                        A${dimension.width * 0.1} ${dimension.width * 0.1} 0 0 1 ${-dimension.width * 0.1} ${dimension.height - 500} 
                        L0 0`;
    

    const curve1 = {
        initial: {
            d: initialPath1,
            transition: { duration: 2.3, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath1,
            transition: { duration: 2.3, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    };

    const curve2 = {
        initial: {
            d: initialPath2,
            transition: { duration: 2.3, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath2,
            transition: { duration: 2.3, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    };

    const slideUp = {
        initial: {
            y: "0"
        },
        exit: {
            y: "-100vh",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
        }
    };

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 &&
                <>
                    <svg>
                        <motion.path className={styles.layer1} variants={curve2} initial="initial" exit="exit"></motion.path>
                        <motion.path className={styles.layer2} variants={curve1} initial="initial" exit="exit"></motion.path>
                    </svg>
                    <p className={styles.loaderText}>ehono bhabinai ki boshamu</p>
                </>
            }
        </motion.div>
    );
}

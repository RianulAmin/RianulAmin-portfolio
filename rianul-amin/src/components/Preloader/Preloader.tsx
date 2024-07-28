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
                    A${dimension.width * 0.35} ${dimension.width * 0.35} 0 0 1 ${dimension.width * 0.82} ${dimension.height + 200} 
                    A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${dimension.width * 0.65} ${dimension.height + 100} 
                    A${dimension.width * 0.25} ${dimension.width * 0.25} 0 0 1 ${dimension.width * 0.52} ${dimension.height} 
                    A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.42} ${dimension.height + 50} 
                    A${dimension.width * 0.4} ${dimension.width * 0.4} 0 0 1 ${dimension.width * 0.3} ${dimension.height + 150} 
                    A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${-dimension.width * 0.1} ${dimension.height + 300} 
                    L0 0`;

                    const targetPath1 = `M0 0 
                    L${dimension.width} 0 
                    L${dimension.width} ${dimension.height - 600} 
                    A${dimension.width * 0.35} ${dimension.width * 0.35} 0 0 1 ${dimension.width * 0.82} ${dimension.height - 500} 
                    A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${dimension.width * 0.65} ${dimension.height - 600} 
                    A${dimension.width * 0.25} ${dimension.width * 0.25} 0 0 1 ${dimension.width * 0.52} ${dimension.height - 700} 
                    A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.42} ${dimension.height - 650} 
                    A${dimension.width * 0.4} ${dimension.width * 0.4} 0 0 1 ${dimension.width * 0.3} ${dimension.height - 550} 
                    A${dimension.width * 0.15} ${dimension.width * 0.15} 0 0 1 ${-dimension.width * 0.1} ${dimension.height - 600} 
                    L0 0`;

    const initialPath2 = `M0 0 
                        L${dimension.width} 0 
                        L${dimension.width} ${dimension.height + 700} 
                        A${dimension.width * 0.14} ${dimension.width * 0.14} 0 0 1 ${dimension.width * 0.78} ${dimension.height + 450} 
                        A${dimension.width * 0.1} ${dimension.width * 0.1} 0 0 1 ${dimension.width * 0.68} ${dimension.height + 400} 
                        A${dimension.width * 0.18} ${dimension.width * 0.18} 0 0 1 ${dimension.width * 0.58} ${dimension.height + 300} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.48} ${dimension.height + 350} 
                        A${dimension.width * 0.12} ${dimension.width * 0.12} 0 0 1 ${dimension.width * 0.38} ${dimension.height + 300} 
                        A${dimension.width * 0.14} ${dimension.width * 0.14} 0 0 1 ${dimension.width * 0.28} ${dimension.height + 350} 
                        A${dimension.width * 0.16} ${dimension.width * 0.16} 0 0 1 ${dimension.width * 0.18} ${dimension.height + 450} 
                        A${dimension.width * 0.16} ${dimension.width * 0.16} 0 0 1 ${dimension.width * 0.08} ${dimension.height + 600} 
                        A${dimension.width * 0.1} ${dimension.width * 0.1} 0 0 1 ${-dimension.width * 0.1} ${dimension.height + 700} 
                        L0 0`;

    const targetPath2 = `M0 0 
                        L${dimension.width} 0 
                        L${dimension.width} ${dimension.height - 500} 
                        A${dimension.width * 0.14} ${dimension.width * 0.14} 0 0 1 ${dimension.width * 0.78} ${dimension.height - 250} 
                        A${dimension.width * 0.1} ${dimension.width * 0.1} 0 0 1 ${dimension.width * 0.68} ${dimension.height - 300} 
                        A${dimension.width * 0.18} ${dimension.width * 0.18} 0 0 1 ${dimension.width * 0.58} ${dimension.height - 400} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.48} ${dimension.height - 350} 
                        A${dimension.width * 0.12} ${dimension.width * 0.12} 0 0 1 ${dimension.width * 0.38} ${dimension.height - 400} 
                        A${dimension.width * 0.14} ${dimension.width * 0.14} 0 0 1 ${dimension.width * 0.28} ${dimension.height - 350} 
                        A${dimension.width * 0.16} ${dimension.width * 0.16} 0 0 1 ${dimension.width * 0.18} ${dimension.height - 250} 
                        A${dimension.width * 0.16} ${dimension.width * 0.16} 0 0 1 ${dimension.width * 0.08} ${dimension.height - 100} 
                        A${dimension.width * 0.1} ${dimension.width * 0.1} 0 0 1 ${-dimension.width * 0.1} ${dimension.height - 500} 
                        L0 0`;

                        const initialPath3 = `M0 0 
                        L${dimension.width} 0 
                        L${dimension.width} ${dimension.height + 900} 
                        A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.85} ${dimension.height + 600} 
                        A${dimension.width * 0.35} ${dimension.width * 0.35} 0 0 1 ${dimension.width * 0.7} ${dimension.height + 500} 
                        A${dimension.width * 0.25} ${dimension.width * 0.25} 0 0 1 ${dimension.width * 0.5} ${dimension.height + 400} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.4} ${dimension.height + 350} 
                        A${dimension.width * 0.28} ${dimension.width * 0.28} 0 0 1 ${dimension.width * 0.3} ${dimension.height + 400} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.18} ${dimension.height + 500} 
                        A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.05} ${dimension.height + 700} 
                        A${dimension.width * 0.35} ${dimension.width * 0.35} 0 0 1 ${-dimension.width * 0.2} ${dimension.height + 900} 
                        L0 0`;
    
    const targetPath3 = `M0 0 
                        L${dimension.width} 0 
                        L${dimension.width} ${dimension.height - 700} 
                        A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.85} ${dimension.height - 400} 
                        A${dimension.width * 0.35} ${dimension.width * 0.35} 0 0 1 ${dimension.width * 0.7} ${dimension.height - 300} 
                        A${dimension.width * 0.25} ${dimension.width * 0.25} 0 0 1 ${dimension.width * 0.5} ${dimension.height - 200} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.4} ${dimension.height - 150} 
                        A${dimension.width * 0.28} ${dimension.width * 0.28} 0 0 1 ${dimension.width * 0.3} ${dimension.height - 200} 
                        A${dimension.width * 0.2} ${dimension.width * 0.2} 0 0 1 ${dimension.width * 0.18} ${dimension.height - 300} 
                        A${dimension.width * 0.3} ${dimension.width * 0.3} 0 0 1 ${dimension.width * 0.05} ${dimension.height - 500} 
                        A${dimension.width * 0.35} ${dimension.width * 0.35} 0 0 1 ${-dimension.width * 0.2} ${dimension.height - 700} 
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

    const curve3 = {
        initial: {
            d: initialPath3,
            transition: { duration: 2.3, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath3,
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
                        <motion.path className={styles.layer3} variants={curve3} initial="initial" exit="exit"></motion.path>
                        <motion.path className={styles.layer2} variants={curve2} initial="initial" exit="exit"></motion.path>
                        <motion.path className={styles.layer1} variants={curve1} initial="initial" exit="exit"></motion.path>
                    </svg>
                    <p className={styles.loaderText}>ehono bhabinai ki boshamu</p>
                </>
            }
        </motion.div>
    );
}

'use client'
import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';
import { motion } from 'framer-motion';

export default function Preloader() {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height}
                         Q${dimension.width * 0.95} ${dimension.height + 150}
                         ${dimension.width * 0.90} ${dimension.height + 120}
                         Q${dimension.width * 0.85} ${dimension.height + 160}
                         ${dimension.width * 0.80} ${dimension.height + 100}
                         Q${dimension.width * 0.75} ${dimension.height + 170}
                         ${dimension.width * 0.70} ${dimension.height + 90}
                         Q${dimension.width * 0.65} ${dimension.height + 150}
                         ${dimension.width * 0.60} ${dimension.height + 80}
                         Q${dimension.width * 0.55} ${dimension.height + 140}
                         ${dimension.width * 0.50} ${dimension.height + 90}
                         Q${dimension.width * 0.45} ${dimension.height + 160}
                         ${dimension.width * 0.40} ${dimension.height + 100}
                         Q${dimension.width * 0.35} ${dimension.height + 150}
                         ${dimension.width * 0.30} ${dimension.height + 90}
                         Q${dimension.width * 0.25} ${dimension.height + 160}
                         ${dimension.width * 0.20} ${dimension.height + 100}
                         Q${dimension.width * 0.15} ${dimension.height + 150}
                         ${dimension.width * 0.10} ${dimension.height + 90}
                         Q${dimension.width * 0.05} ${dimension.height + 120}
                         0 ${dimension.height} Z`;

    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height}
                        Q${dimension.width * 0.95} ${dimension.height - 150}
                        ${dimension.width * 0.90} ${dimension.height - 120}
                        Q${dimension.width * 0.85} ${dimension.height - 160}
                        ${dimension.width * 0.80} ${dimension.height - 100}
                        Q${dimension.width * 0.75} ${dimension.height - 170}
                        ${dimension.width * 0.70} ${dimension.height - 90}
                        Q${dimension.width * 0.65} ${dimension.height - 150}
                        ${dimension.width * 0.60} ${dimension.height - 80}
                        Q${dimension.width * 0.55} ${dimension.height - 140}
                        ${dimension.width * 0.50} ${dimension.height - 90}
                        Q${dimension.width * 0.45} ${dimension.height - 160}
                        ${dimension.width * 0.40} ${dimension.height - 100}
                        Q${dimension.width * 0.35} ${dimension.height - 150}
                        ${dimension.width * 0.30} ${dimension.height - 90}
                        Q${dimension.width * 0.25} ${dimension.height - 160}
                        ${dimension.width * 0.20} ${dimension.height - 100}
                        Q${dimension.width * 0.15} ${dimension.height - 150}
                        ${dimension.width * 0.10} ${dimension.height - 90}
                        Q${dimension.width * 0.05} ${dimension.height - 120}
                        0 ${dimension.height} Z`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 2, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
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
                        <motion.path variants={curve} initial="initial" exit="exit" fill="black"></motion.path>
                    </svg>
                    <p className={styles.loaderText}>ehono bhabinai ki boshamu</p>
                </>
            }
        </motion.div>
    );
}

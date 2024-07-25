'use client'
import Navbar from "@/components/Navbar/Navbar";
import Preloader from "@/components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <AnimatePresence mode="wait">
            {isLoading && <Preloader />}
      </AnimatePresence>
      
    </>
  );
}

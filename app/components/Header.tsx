'use client';
import mainImg from '@/public/home/headerImg.webp';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  const arr = [
    { bg: 'bg-red-400', label: 'A' },
    { bg: 'bg-yellow-400', label: 'B' },
    { bg: 'bg-blue-400', label: 'C' },
  ];

  const gridClasses = [
    // Index 2: bottom right
    'flex items-center justify-center text-3xl font-semibold rounded',
    // Index 0: large left block
    'row-span-2 flex items-center justify-center text-white text-4xl font-bold rounded',
    // Index 1: top right
    'flex items-center justify-center text-3xl font-semibold rounded',
  ];
  const gridClasses2 = [
    // Index 0: large left block
    'row-span-2 flex items-center justify-center text-white text-4xl font-bold rounded', // Index 1: top right

    'flex items-center justify-center text-3xl font-semibold rounded',

    // Index 2: bottom right
    'flex items-center justify-center text-3xl font-semibold rounded',
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  // Observe the main sticky flex row
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['0.2 1', '0.7 1'], // Start at 20%, end at 70%
  });

  // Map progress [0, 1] to width ["10%", "100%"]
  const width = useTransform(scrollYProgress, [0.3, 1], ['30%', '100%']);
  const translateY = useTransform(scrollYProgress, [0.04, 0.3], ['17%', '0%']);

  return (
    <>
      <div
        ref={containerRef}
        className={`border2 bg-[#FEFAF4] w-full flex flex-col h-[400vh] relative`}
      >
        <motion.div
          className="w-full sticky bg-[#FEFAF4] top-0 shrink-0 left-0 h-[100vh]"
          style={{ translateY }}
        >
          <Image
            src={mainImg}
            alt="Header Image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex w-full mt-[-100vh] justify-center items-center overflow-clip  sticky top-0 left-0 h-[100vh] z-[10]   border2 ">
          <div className="w-full shrink-0 h-full  max-w-[50%] bg-[#FEFAF4] px-8 flex items-center">
            <div className="grid grid-cols-2  grid-rows-[40%_60%] gap-6 w-full h-full  max-h-[70%]">
              {arr.map((item, idx) => (
                <div
                  key={item.label}
                  className={`${item.bg} ${gridClasses2[idx]}`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <motion.div
            style={{ width }}
            className="w-[30%]  h-full  shrink-0"
          ></motion.div>
          <div className="w-full shrink-0 h-full  max-w-[50%] bg-[#FEFAF4] px-8 flex items-center">
            <div className="grid grid-cols-2  grid-rows-[30%_70%] gap-6 w-full h-full  max-h-[70%]">
              {arr.map((item, idx) => (
                <div
                  key={item.label}
                  className={`${item.bg} ${gridClasses[idx]}`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

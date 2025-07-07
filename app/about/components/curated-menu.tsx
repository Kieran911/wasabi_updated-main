'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useLayoutEffect, useState } from 'react';

export const CuratedMenu = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,

    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0px', `-${containerWidth - window.innerWidth}px`]
  );

  return (
    <>
      <div className="flex flex-col gap-4 items-center mt-16 mb-8 text-black">
        <h2 className="font-serif font-normal tracking-wide text-[4vw] max-w-[45vw] break-words leading-none">
          BROWSE OUR
        </h2>
        <h2 className="font-serif font-normal tracking-wide text-[4vw] max-w-[45vw] break-words leading-none">
          CURATED MENU
        </h2>
      </div>

      <div className="h-[300vh] relative bg-white w-full" ref={targetRef}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex flex-row flex-nowrap items-center px-6"
            style={{ x }}
          >
            <div className="flex-shrink-0 w-[30vw] h-screen bg-blue-300 rounded-2xl flex items-center justify-center text-8xl font-bold">
              A
            </div>
            <div className="flex-shrink-0 w-[30vw] h-screen bg-red-300 rounded-2xl flex items-center justify-center text-8xl font-bold">
              B
            </div>
            <div className="flex-shrink-0 w-[30vw] h-screen bg-purple-300 rounded-2xl flex items-center justify-center text-8xl font-bold">
              C
            </div>
            <div className="flex-shrink-0 w-[30vw] h-screen bg-green-300 rounded-2xl flex items-center justify-center text-8xl font-bold">
              D
            </div>
            <div className="flex-shrink-0 w-[30vw] h-screen bg-yellow-300 rounded-2xl flex items-center justify-center text-8xl font-bold">
              E
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

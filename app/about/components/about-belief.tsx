'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Forum, Noto_Sans, Playfair } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const forum = Forum({
  subsets: ['latin'],
  weight: ['400'],
});

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

const playfair = Playfair({
  subsets: ['latin'],
  weight: ['400'],
});

import Logo from '@/public/about/White 2.png';
import backgroundImage from '@/public/about/Rectangle 240648328.png';
import backgroundImageFilter from '@/public/about/Rectangle 240648329.png';
import chefHat from '@/public/about/ChefHat.png';
import building from '@/public/about/Building.png';
import stars from '@/public/about/PersonArmsSpread.png';

export const AboutAndBelief = () => {
  const beliefRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: beliefRef,
    offset: ['start end', 'start start'], // When the top of belief enters the bottom and then the top of the viewport
  });

  const aboutX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const wasabiX = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const filterScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  return (
    <div className="h-[200vh] w-full relative bg-black">
      {/* First sticky section */}
      <div className="h-[100vh] w-full sticky top-0 overflow-hidden z-10">
        <motion.div
          className="relative inset-0 z-20 h-full"
          style={{ scale: filterScale }}
        >
          <Image
            src={backgroundImageFilter}
            alt="aesthetic view"
            className="h-full w-full object-cover z-30 relative"
          />
          <Image
            src={backgroundImage}
            alt="about"
            className="h-full w-full object-cover absolute top-0 left-0 z-0"
          />
        </motion.div>

        <div
          className={twMerge(
            'h-full w-full flex flex-col justify-center px-6 md:px-16 py-12 absolute top-0 left-0 z-50 pointer-events-none',
            forum.className
          )}
        >
          <motion.span
            style={{ x: aboutX }}
            className="text-gray-100 font-bold tracking-wide text-[9vw] max-w-[45vw] break-words leading-none self-start ml-9"
          >
            ABOUT
          </motion.span>
          <motion.span
            style={{ x: wasabiX }}
            className="text-gray-100 font-bold tracking-wide text-[9vw] max-w-[45vw] break-words leading-none self-end text-right mr-9"
          >
            WASABI
          </motion.span>
        </div>
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
      </div>

      {/* Belief Section */}
      <div
        ref={beliefRef}
        className="h-[100vh] w-full sticky top-0 overflow-hidden z-20 flex items-center justify-center bg-black"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center px-4">
          <div className="mb-4 flex flex-col items-center">
            <span className="h-24 w-24">
              <Image
                src={Logo}
                alt={'Wasabi-logo'}
                className="object-cover h-full w-full"
              />
            </span>
          </div>

          <div
            className={twMerge(
              'text-gray-100 tracking-widest text-sm mb-8',
              forum.className
            )}
          >
            OUR BELIEF
          </div>

          <div
            className={twMerge(
              'text-white text-lg md:text-3xl font-normal leading-relaxed md:leading-relaxed mb-8 max-w-4xl mx-auto',
              playfair.className
            )}
          >
            <span className={forum.className}>Because</span>{' '}
            <span className="italic">Bold Deserves Beauty</span>.{' '}
            <span className={forum.className}>
              At Wasabi, Every Detail Is A
            </span>{' '}
            <span className="italic font-semibold">
              Statement—Of Taste, Elegance, And Fire.
            </span>{' '}
            <span className={forum.className}>We Exist To Turn</span>{' '}
            <span className="italic">Dining Into Art.</span>
          </div>

          <div className="flex flex-row justify-center items-center gap-x-12 mb-8 text-gray-200">
            <div
              className={twMerge(
                'flex flex-col items-center m-6',
                forum.className
              )}
            >
              <span className="text-lg h-5 w-4">
                <Image
                  className="h-full w-full object-cover"
                  src={stars}
                  alt="stars"
                />
              </span>
              <span className="text-sm mt-1">45 Staffs</span>
            </div>
            <div className="flex flex-col items-center  m-6">
              <span className="text-lg h-5 w-4">
                <Image
                  className="h-full w-full object-cover"
                  src={building}
                  alt="locations"
                />
              </span>
              <span className="text-sm mt-1">3 Locations</span>
            </div>
            <div className="flex flex-col items-center  m-6">
              <span className="text-lg h-5 w-4">
                <Image
                  className="h-full w-full object-cover"
                  src={chefHat}
                  alt="chef hats"
                />
              </span>
              <span className="text-sm mt-1">23 Chefs</span>
            </div>
          </div>

          <div
            className={twMerge(
              'text-gray-300 text-sm md:text-base tracking-wide mt-2',
              noto_sans.className
            )}
          >
            We're Not Just Serving Meals—We're Curating Moments
            <br />
            Of Indulgence, Artistry, And Unforgettable Taste.
          </div>
        </div>
      </div>
    </div>
  );
};

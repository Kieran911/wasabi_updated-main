'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useLayoutEffect, useState, useEffect } from 'react';

import { Forum, Noto_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import firstImage from '@/public/about/person-holding-sushi-with-sticks.png';
import secondImage from '@/public/about/delicious-caviar-with-spoon-ginger-vasabi-marble.png';
import thirdImage from '@/public/about/barista-team-coffee-shop.png';
import fourthImage from '@/public/about/friends-making-barbecue-close-up.png';
import fifthImage from '@/public/about/close-up-male-chef-preparing-food-kitchen.png';
import sixthImage from '@/public/about/front-view-delicious-thanksgiving-meal.png';
import seventhImage from '@/public/about/woman-making-spring-roll-cutting-board.png';
import Image from 'next/image';

const forum = Forum({
  subsets: ['latin'],
  weight: ['400'],
});

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

const timelineEvents = [
  {
    year: '2019',
    title: 'INSPIRATION',
    description:
      "Inspired By The Balance Of Tokyo's Street-Side Sushi And Kyoto's Serene Kaiseki Traditions, The Vision Was Clear: To Create A Place Where Elegance And Intensity Meet On The Plate.",
    image: firstImage,
  },
  {
    year: '2020',
    title: 'RESEARCH',
    description:
      'While the World paused, The Dream Moved Forward Behind The Scenes--Refining Recipes, Sourcing Ingredients, And Sketching The Spirit Of What Wasabi Could be.',
    image: secondImage,
  },
  {
    year: '2021',
    title: 'THE TEAM',
    description:
      'In 2021, A Team Began To Form. Chefs, Designers And Artisans Joined The Journey, Drawn By A Shared Belief In Excellence. The Name Wasabi Was Chosen Deliberately--Pure, Potent, And Unapologetically Bold',
    image: thirdImage,
  },
  {
    year: '2022',
    title: 'THE VISION',
    description:
      'The Vision Took Shape. A Forgotten Brick Building In The Heart Of The City Was Selected. Every Inch Was Reimagined--Wood, Stone, Light, And Sound Chosen With Obessive Attension To Detail',
    image: fourthImage,
  },
  {
    year: '2023',
    title: 'COMING TO LIFE',
    description:
      'Construction Began. Walls Went Up, Tiles Went In, And The Scent Of Cedar Began To Fill The Space. Behind The Scenes, Tastings Turned Into Rituals--Each Dish Refined Over And Over Until It Was Both Beautiful And Unforgettable',
    image: fifthImage,
  },
  {
    year: '2024',
    title: 'POLISHING',
    description:
      'Was A Year Of Polishing. The Team Trained Daily, Preparing Not Just To Serve Food, But To Deliver An Experience. The Interiors Were Softened, The Plating Perfected. Private Dinners Gave Birth To Public Anticipation',
    image: sixthImage,
  },
  {
    year: '2025',
    title: 'WASABI',
    description:
      'Wasabi Opened Its Doors. Not Just A Restaurant, But A Destination. A Space Where Tradition Meets Imagination, And Every Meal Is A Moment Worth Remembering.',
    image: seventhImage,
  },
];

let textBelowContent =
  'FROM A SPARK OF BOLDNESS TO A SYMPHONY OF TASTE. THE WASABI STORY';

export const Timeline = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [eventWidth, setEventWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  );

  useEffect(() => {
    function recalcWidths() {
      const vw = window.innerWidth;
      setEventWidth(vw * 0.5);
      setViewportWidth(vw);
      setContentWidth(timelineEvents.length * vw * 0.5 + vw * 0.5);
    }
    recalcWidths();
    window.addEventListener('resize', recalcWidths);
    return () => window.removeEventListener('resize', recalcWidths);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0px', `-${Math.max(0, contentWidth - viewportWidth)}px`]
  );

  const activeItemProgress = useTransform(
    scrollYProgress,
    (progress) => progress * (timelineEvents.length - 1)
  );

  return (
    <>
      <div className="hidden lg:block">
        <div className="h-[300vh] relative bg-white w-full" ref={targetRef}>
          <div className="sticky top-0 h-screen flex items-center overflow-hidden pb-32">
            <h2
              className={twMerge(
                'absolute top-[7%] left-[10vw] text-5xl font-light text-black z-20',
                forum.className
              )}
            >
              OUR STORY
            </h2>

            {/* Horizontal div */}
            <motion.div
              ref={contentRef}
              className="relative flex flex-row flex-nowrap items-stretch px-[10vw] w-full mb-12"
              style={{
                x,
                paddingRight: eventWidth,
                transform: 'translateY(-160px) scale(0.95)',
              }}
            >
              {/* Main Horizontal line - positioned relative to contentRef and spans between item centers */}
              {viewportWidth > 0 && timelineEvents.length > 1 && (
                <motion.div
                  className="absolute top-1/2 h-[1px] bg-gray-300 z-0"
                  initial={{ backgroundColor: 'gray' }}
                  animate={{ backgroundColor: 'black' }}
                  style={{
                    left: `calc(10vw + ${eventWidth / 2}px)`,
                    width: `${(timelineEvents.length - 1) * eventWidth}px`,
                    transform: 'translateY(-50%)',
                  }}
                />
              )}

              {timelineEvents.map((event, index) => {
                const activeScale = useTransform(
                  activeItemProgress,
                  [index - 0.5, index],
                  [1, 1.2]
                );
                const activeCircleColor = useTransform(
                  activeItemProgress,
                  [index - 0.5, index],
                  ['#d1d5db', '#000000']
                );
                const activeLineColor = useTransform(
                  activeItemProgress,
                  [index - 0.5, index],
                  ['#d1d5db', '#000000']
                );
                const activeYearColor = useTransform(
                  activeItemProgress,
                  [index - 0.5, index],
                  ['#9ca3af', '#000000']
                );
                const activeImageOpacity = useTransform(
                  activeItemProgress,
                  [index - 0.5, index],
                  [0, 1]
                );

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center relative py-16"
                    style={{ width: eventWidth }}
                  >
                    {/* Year positioned *above* the horizontal line */}
                    <motion.span
                      className={twMerge(
                        'absolute bottom-[calc(45% + 2rem)] mr-28 -mt-8 text-5xl font-normal whitespace-nowrap z-10',
                        forum.className
                      )}
                      style={{ color: activeYearColor }}
                    >
                      {event.year}
                    </motion.span>

                    {/* Circle positioned exactly on the line line */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                      style={{ scale: activeScale }}
                    >
                      <motion.div
                        className="w-4 h-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: activeCircleColor }}
                      />
                    </motion.div>

                    {/* Vertical line and content block below the horizontal line */}
                    <div className="absolute top-[calc(50% + 0.75rem)]  max-h-[280px] flex flex-col items-center">
                      <motion.div
                        className="w-[1px] bg-gray-300 min-h-[50px]"
                        style={{
                          height: '50px',
                          backgroundColor: activeLineColor,
                        }}
                      />

                      {/* Content block - follows directly after the vertical line */}
                      <motion.div
                        className={twMerge(
                          'flex flex-col items-start text-left max-w-[250px] translate-x-[45%]',
                          noto_sans.className
                        )}
                      >
                        <h3 className="text-sm font-bold text-black uppercase mb-[1px]">
                          {event.title}
                        </h3>
                        <p className="text-xs text-gray-900 leading-[1.4]">
                          {event.description}
                        </p>
                        {event.image && (
                          <motion.div
                            style={{
                              opacity: activeImageOpacity,
                            }}
                            className="w-full"
                          >
                            <Image
                              src={event.image}
                              alt={event.title}
                              className="w-full h-auto object-cover shadow-md"
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                );
              })}
              {/* textBelowContent at the bottom, scrolls with timeline, desktop only */}
              <div
                className="flex-shrink-0 flex items-end justify-start w-full translate-y-[300%]"
                style={{
                  width: `${contentWidth}px`,
                  position: 'absolute',
                  left: '20vw',
                  bottom: '0vh',
                  pointerEvents: 'none',
                }}
              >
                <span
                  className={twMerge(
                    'text-[110px] font-extrabold tracking-tight text-black opacity-20 w-full',
                    forum.className
                  )}
                  style={{
                    letterSpacing: '0.05em',
                    userSelect: 'none',
                    lineHeight: 1,
                  }}
                >
                  {textBelowContent}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile timeline */}
      <div className="flex flex-col gap-15 px-4 py-16 lg:hidden bg-white relative">
        <h2
          className={twMerge(
            'text-5xl font-light text-black z-20 text-center',
            forum.className
          )}
        >
          OUR STORY
        </h2>
        {timelineEvents.map((event, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <span
              className={twMerge(
                'text-4xl font-bold mb-2 text-black',
                forum.className
              )}
            >
              {event.year}
            </span>
            {event.image && (
              <Image
                src={event.image}
                alt={event.title}
                className="w-full max-w-xs h-auto object-cover rounded-xl shadow-md mb-4"
              />
            )}
            <h3
              className={twMerge(
                'text-lg font-bold uppercase mb-1 text-black',
                noto_sans.className
              )}
            >
              {event.title}
            </h3>
            <p
              className={twMerge(
                'text-sm text-gray-700 leading-relaxed',
                noto_sans.className
              )}
            >
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

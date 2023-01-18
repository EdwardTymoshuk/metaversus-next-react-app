'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute flex bottom-[48%] md:bottom-[38%] left-20 md:w-[211px] w-[150px] h-auto p-[6px] rounded-[20%] bg-[#5D6680]">
          <div className="absolute flex flex-row w-full h-[50px] bottom-10 left-0">
            <div className="flex w-1/2 relative items-center z-1">
            <img src="people-circle-1.png" alt="world" className="absolute left-3 z-20" />
            <img src="people-circle-2.png" alt="world" className="absolute left-6 z-10" />
            <img src="people-circle-3.png" alt="world" className="absolute left-9 z-0" />
            </div>
          <div className="flex flex-[100%] text-white text-[0.6rem] md:text-xs items-center z-1 pr-[10px] pl-[10px] md:p-0 justify-end md:justify-start">
          <p>+ 264 has joined</p>
          </div>
          </div>
          <div className="absolute flex bottom-6 w-full left-3 text-white md:text-xl text-sm md:font-bold font-semibold z-1">
            <p>The Upside Down</p>
          </div>
          <img src="the-upside-rectangle.svg" alt="world" className="w-full h-full rounded-[20%] blur-[120px] absolute" />
          <img src="the-upside-rectangle.svg" alt="world" className="w-full h-full rounded-[20%]" />
        </div>
        <div className="absolute top-20 right-0 md:w-[211px] w-[150px] h-auto p-[6px] rounded-[20%] bg-[#5D6680]">
        <div className="absolute flex flex-row w-full h-[50px] bottom-10 left-0">
            <div className="flex w-1/2 relative items-center z-1">
            <img src="people-circle-1.png" alt="world" className="absolute left-3 z-20" />
            <img src="people-circle-2.png" alt="world" className="absolute left-6 z-10" />
            <img src="people-circle-3.png" alt="world" className="absolute left-9 z-0" />
            </div>
          <div className="flex flex-[100%] text-white text-[0.6rem] md:text-xs items-center z-1 pr-[10px] pl-10px justify-end md:justify-start">
          <p>+ 264 has joined</p>
          </div>
          </div>
          <div className="absolute flex bottom-6 w-full left-3 text-white text-lg md:text-xl text-sm md:font-bold font-semibold z-1">
            <p className="">Hawkins Labs</p>
          </div>
          <img src="hawking-labs-rectungle.png" alt="world" className="w-full h-full rounded-[20%] blur-[120px] absolute" />
          <img src="hawking-labs-rectungle.png" alt="world" className="w-full h-full rounded-[20%]" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
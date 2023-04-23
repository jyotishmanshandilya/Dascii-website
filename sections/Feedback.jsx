"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import planet9 from "../public/planet-09.png";
import stamp from "../public/stamp.png";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto lg:flex-row flex flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative "
      >
        <div className="feedback-gradient" />

        <div>
          <h5 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
          ◦ Jay Patel
          </h5>
          <h5 className="font-bold sm:text-[29px] text-[23px] sm:leading-[38.32px] leading-[33.32px] text-white">
          ◦ Jyotishman Shandilya
          </h5>
          <h5 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
          ◦ Daksh Dadhania
          </h5>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Co Founders
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “With the development of today's technology, Social Media is very useful
          for today's work, or can be called brand developers. by using tech you can grow to infinity”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <Image
          src={planet9}
          alt="planet-09"
          placeholder="blur"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src={stamp}
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;

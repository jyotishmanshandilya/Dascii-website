"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import fullmap from "../public/fullmap.svg";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People On The World " textStyles="text-center" />
      <TitleText
        title={
          <>
            Join us and our community of developers and fresh start your freelance journey
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "easeIn", "0.3", 1)}
        className="relative mt-[68px] flex w-full lg:h-[550px] md:h-[360px] h-[170px]"
      >
        <Image src={fullmap} alt="map" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;

"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Dascii" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">Dascii</span> is an outsourcing company that provides essential services to businesses looking to grow and succeed. With a team of experienced professionals and a commitment to excellence, we help companies  {" "}
        <span className="font-extrabold text-white">
          {" "}
          unleash your full potential{" "}
        </span>{" "}
        and reach your goals.{" "}
        From <span className="font-extrabold text-white"> creative design </span>  and <span className="font-extrabold text-white"> content creation </span>, to social media <span className="font-extrabold text-white"> marketing </span> and <span className="font-extrabold text-white"> website </span> improvement, we provide a range of services that are tailored to meet the unique needs of each and every client. Let's{" "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the Dascii by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;

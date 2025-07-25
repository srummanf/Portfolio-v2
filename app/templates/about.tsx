"use client";

import { motion } from "framer-motion";
import { IoLogoFigma } from "react-icons/io5";
import {
  SiNeovim,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiGoland,
  SiFlask,
  SiGit,
  SiWebflow,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiTypescript,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiOpencv,
  SiEthereum,
  SiSolidity,
  SiIpfs,
  SiWeb3Dotjs,
  SiFirebase,
  SiAmazonaws,
  SiVercel,
  SiGooglecloud,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { VscArrowRight } from "react-icons/vsc";

import Image from "next/image";
import { AnimatedText } from "@components/animated-text";
import { SectionHeader } from "@components/section-header";
import { SectionShell } from "@components/section-shell";
import { MotionLinkButton } from "@components/link-button";
import { getAge } from "@utils/get-age";
import { useMounted } from "@hooks/use-mounted";
import { useTheme } from "@hooks/use-theme";
import { cn } from "@utils/cn";
import ExternalLink from "@/components/ExternalLinkWithArrow";

const MotionImage = motion(Image);

export const About = () => {
  const { theme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;
  return (
    <SectionShell id="about">
      <SectionHeader heading="About" />

      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: true }}
        className="relative mt-16 grid grid-cols-12 gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16"
      >
        <AnimatedText
          as="p"
          className="col-span-full text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8"
          text="Get a brief look at who I am and what I do. If you would like to know more about me and my interests, you can."
        />
        {/* <MotionLinkButton */}
        {/*   href='/about' */}
        {/*   motionProps={{ */}
        {/*     variants: { */}
        {/*       hidden: { opacity: 0, y: 50 }, */}
        {/*       visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } }, */}
        {/*     }, */}
        {/*   }} */}
        {/*   className='col-span-full md:col-start-7 xl:col-start-9' */}
        {/* > */}
        {/*   More about me */}
        {/* </MotionLinkButton> */}
      </motion.section>

      <section className="relative mt-24 flex grid-cols-12 flex-col-reverse gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16">
        <section className="col-span-full md:col-span-6 xl:col-span-8">
          <motion.article
            variants={{
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.25 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true }}
          >
            <AnimatedText
              as="h3"
              text="Who am I"
              className="text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400"
            />
            <AnimatedText
              as="p"
              text={`My name is Shaikh Rumman Fardeen. I am ${getAge()} years old.`}
              className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
            />
            <AnimatedText
              as="p"
              text={`A passionate developer with a love for technology, design, and solving real-world problems through code.`}
              className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
            />
            <AnimatedText
              as="p"
              text="With a background in Full Stack Development, I enjoy building modern web applications using tools like Next.js, Web3, and Machine Learning. My keen interest in UI/UX fuels my desire to craft experiences that are both beautiful and intuitive."
              className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
            />
            <AnimatedText
              as="p"
              text="Beyond code, I love sharing knowledge through blogs and writing. I’m known for being collaborative, driven, and always curious to explore new ideas and technologies."
              className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
            />
            <AnimatedText
              as="p"
              text="My mission is to keep growing, stay curious, and embrace simplicity in both life and work."
              className="mt-6 text-lg font-light leading-relaxed text-dark-400 dark:text-dark-200"
            />
          </motion.article>

          <motion.section
            variants={{
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.25 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true }}
            className="col-span-full mt-14 overflow-hidden md:col-span-6 xl:col-span-8"
          >
            <AnimatedText
              as="h3"
              text="Tech I enjoy"
              className="text-sm uppercase tracking-wider text-dark-200 dark:text-dark-400"
            />
            <motion.div
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, ease: "circOut" },
                },
              }}
              className="mt-6 flex flex-wrap gap-6 text-dark-300"
            >
              <IoLogoFigma size={28} title="Figma" />
              <SiTypescript size={28} title="TypeScript" />
              <SiReact size={28} title="React.js" />
              <SiNextdotjs size={28} title="Next.js" />
              <SiTailwindcss size={28} title="TailwindCSS" />
              <SiPrisma size={28} title="Prisma" />
              <SiJavascript size={28} title="Javascript" />
              <SiPython size={28} title="Python" />
              <SiGoland size={28} title="Golang" />
              <SiFlask size={28} title="Flask" />
              <SiGooglecloud size={28} title="Google Cloud" />
              <SiGit size={28} title="Git" />
              <SiWebflow size={28} title="Webflow" />
              <SiSupabase size={28} title="Supabase" />
              <SiFirebase size={28} title="Firebase" />
              <SiMongodb size={28} title="MongoDB" />
              <SiPostgresql size={28} title="PostgreSQL" />
              <SiPostman size={28} title="Postman" />
              <SiTensorflow size={28} title="TensorFlow" />
              <SiPytorch size={28} title="PyTorch" />
              <SiScikitlearn size={28} title="Scikit-Learn" />
              <SiNumpy size={28} title="NumPy" />
              <SiOpencv size={28} title="OpenCV" />
              <SiEthereum size={28} title="Ethereum" />
              <SiSolidity size={28} title="Solidity" />
              <SiIpfs size={28} title="IPFS" />
              <SiWeb3Dotjs size={28} title="Web3.js" />
              <SiAmazonaws size={28} title="AWS" />
              <SiMicrosoftazure size={28} title="Azure" />
              <SiVercel size={28} title="Vercel" />
              <SiDocker size={28} title="Docker" />
              <SiKubernetes size={28} title="Kubernetes" />
            </motion.div>
          </motion.section>
        </section>

        <motion.figure
          variants={{
            hidden: { scaleX: 0, originX: 0 },
            visible: {
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.75,
                ease: [0.9, 0.1, 0.3, 0.96],
                when: "beforeChildren",
                delayChildren: 0.15,
                delay: 0.25,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true }}
          className={cn(
            "mb-6 w-2/3 self-start md:col-span-full md:col-start-7 md:mb-0 md:w-full xl:col-start-9 relative aspect-square",
            {
              "bg-dark-100": theme === "light",
              "bg-dark-700": theme === "dark",
            }
          )}
        >
          <MotionImage
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] },
              },
            }}
            width={500}
            height={50}
            quality={95}
            src="/assets/SRF.jpg"
            alt="Shaikh Rumman Fardeen"
            loading="lazy"
            style={{ filter: "grayscale(100%)" }}
          />
        </motion.figure>
      </section>
    </SectionShell>
  );
};

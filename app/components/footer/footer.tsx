'use client'

import { motion } from 'framer-motion'

import { footerItemVariants, footerVariants } from '@components/footer'

export function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='container flex flex-col justify-center gap-10 py-16 md:flex-row md:justify-between'
    >
      <section className='flex w-1/2 gap-8 md:gap-12 text-xl'>
        <motion.a
          href='https://github.com/srummanf'
          target='_blank'
          rel='noreferrer'
          variants={footerItemVariants}
          className='nav-link text-xl text-dark-500'
        >
          Github
        </motion.a>
        <motion.a
          href='https://www.linkedin.com/in/srummanf/overlay/1725116905782/single-media-viewer?type=DOCUMENT&profileId=ACoAADdHOYoBnHIo9d6lNpw6CQWIxcSfDNFea1c&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSsXxZStOTke4Ica2Q4FV6A%3D%3D'
          target='_blank'
          rel='noreferrer'
          variants={footerItemVariants}
          className='nav-link text-xl text-dark-500'
        >
          Resume
        </motion.a>
        <motion.a
          href='https://www.linkedin.com/in/srummanf/'
          target='_blank'
          rel='noreferrer'
          variants={footerItemVariants}
          className='nav-link text-xl text-dark-500'
        >
          Linkedin
        </motion.a>
      </section>

      <motion.p
        variants={footerItemVariants}
        className='font-light text-dark-300 dark:text-dark-400'
      >
        &copy; SRF {new Date().getFullYear()}
      </motion.p>
    </motion.footer>
  )
}

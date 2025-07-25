'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { Logo } from '@components/logo'
import { linkVariants, navVariants } from '@components/navigation'
import { ThemeToggleButton } from '@components/theme-toggle-button'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: 'hover:text-primary-brand nav-link' }

export function Navigation() {
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='container fixed inset-x-0 top-0 z-50 hidden h-32 w-full items-center justify-between md:flex'
    >
      <AnimatedLink href='/#' variants={linkVariants} className=''>
        <Logo height={36} />
      </AnimatedLink>

      <nav className='flex items-center justify-center gap-x-14 text-lg'>
        <AnimatedLink href='/#intro' variants={linkVariants}>
          Introduction
        </AnimatedLink>
        <AnimatedLink href='/#projects' variants={linkVariants}>
          Projects
        </AnimatedLink>
        <AnimatedLink href='/#about' variants={linkVariants}>
          About
        </AnimatedLink>
        <AnimatedLink href='/#contact' variants={linkVariants}>
          Contact
        </AnimatedLink>
        <AnimatedLink href='https://www.linkedin.com/in/srummanf/overlay/1725116905782/single-media-viewer?type=DOCUMENT&profileId=ACoAADdHOYoBnHIo9d6lNpw6CQWIxcSfDNFea1c&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSsXxZStOTke4Ica2Q4FV6A%3D%3D' variants={linkVariants} target="_blank">
          Resume
        </AnimatedLink>

        <motion.div variants={linkVariants}>
          <ThemeToggleButton />
        </motion.div>
      </nav>
    </motion.header>
  )
}

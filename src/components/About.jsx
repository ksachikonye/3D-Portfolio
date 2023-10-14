import React from 'react'
import cv from '../assets/logo_cv.png'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <img
        src={cv}
        alt="logo_cv"
        className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] object-contain cursor-pointer sm:mt-5 mt-2 sm:mb-[-4rem] mb-[-3rem] ml-[17rem] sm:ml-[70rem]"
        onClick={() =>
          handleIconClick(
            'https://cdn.vladimir-portfolio.com/shared/pdf/CV_VLADIMIR_SACCHETTO.pdf',
          )
        }
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-5 text-[#373737] text-justify sm:text-[18px] text-[13px] max-w-4xl leading-[30px]"
      >
        I am a dedicated and committed individual, prepared to undertake roles
        as a web developer, specializing in website maintenance and management.{' '}
        <br />
        <br />
        In July 2023, I obtained my BTS SIO at the CCI Campus in Strasbourg,
        thanks to a work-study programme with CCS - SAT Clients, part of the
        Crédit Mutuel Alliance Fédérale group. <br />
        <br /> Furthermore, in September 2023, I enrolled at CNAM in Strasbourg
        to pursue my studies toward a Computer Engineering Diploma, with a
        specialization in Information Systems. This educational program is
        conducted in collaboration with ITII Alsace and encompasses an
        apprenticeship at Alcatel-Lucent Enterprise. <br />
        <br />
        Should you require additional information or have any further questions,
        please do not hesitate to contact me.
        {/*  I am a dedicated and committed individual, prepared to undertake roles as a web developer, specializing in website maintenance and management.

In July 2023, I successfully completed my BTS SIO program at CCI Campus in Strasbourg, through a work-study arrangement with CCS - SAT Clients, a division of the Crédit Mutuel Alliance Fédérale group.

Furthermore, in September 2023, I enrolled at CNAM in Strasbourg to pursue my studies toward a Computer Engineering Diploma, with a specialization in Information Systems. This educational program is conducted in collaboration with ITII Alsace and encompasses an apprenticeship at Alcatel-Lucent Enterprise.

Should you require additional information or have any further questions, please do not hesitate to contact me. */}
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, 'about')

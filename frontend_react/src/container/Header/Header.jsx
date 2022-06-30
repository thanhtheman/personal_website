import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={ {x: [-100, 0], opacity: [0, 1]} }
      transition={ {duration: 1} }
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={ {marginLeft: 20}}>
              <p className='p-text'>Hello, this is</p>
              <h1 className='head-text'>Thanh</h1>
            </div>

          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Developer (Web 2 to 3)</p>
            <p className='p-text'>Blockchain Technology</p>
            <div className='social-item'>
             <a href="https://www.linkedin.com/in/thanh-quach1/"><BsLinkedin /></a>
             <a href="https://github.com/thanhtheman"><BsGithub /></a>
            </div> 
          </div>

        </div>

      </motion.div>

      <motion.div
        whileInView={ {opacity: [0, 1]} }
        transition={ {duration: 0.5, delayChildren: 0.5} }
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={ {scale: [0, 1]} }
          transition={ {duration: 1, ease: 'easeInOut'} }
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />

      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
        >
          {[images.solidity, images.ethereum, images.hardhat].map((circle, index) => (
              <div className='app__flex' key={`circle-${index}`}>
                <img src={circle} alt="" />
              </div>
          ))}
        
      </motion.div>


    </div>
  );
}

export default AppWrap(Header, 'home');
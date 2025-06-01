import React, { useState } from 'react';
import { Button } from '@mui/material';
import Card from './Card';
import { features } from '../../Constants';
import { motion } from "motion/react"

// Animation variants for container using Framer Motion.
const containerVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },    // initial state (off-screen and smaller)

  visible: {
    opacity: 1,                                   // final state (fully visible and normal scale)
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delayChildren: 0.3,       // wait before animating children
      staggerChildren: 0.15,     // each child animates 0.15s apart
    },
  },
};

// Animation for each individual item

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};


const Hero = () => {

  const [isSelected, setisSelected] = useState(false);


  return (
    <section className='flex-center mt-25'>

      <motion.div
        className='text-center w-full'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading & description */}

        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Premium Medical
            <span className="block font-semibold text-primary mb-6">Surgical Equipment</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Trusted by healthcare professionals nationwide. We provide high-quality medical
            surgical goods to distributors, pharmacies, doctors, and healthcare facilities.
          </p>
        </motion.div>

        {/* CTA buttons for downloading Android app and visiting iOS portal */}
        <motion.div
          variants={itemVariants}
          className="flex-center flex-col sm:flex-row gap-4"
        >
          <a href='#' >
            <Button
              variant={isSelected ? 'contained' : 'outlined'}
              onMouseEnter={() => setisSelected(true)}
            >
              Download Android App
            </Button>
          </a>
          <a href="#">
            <Button
              variant={isSelected ? 'outlined' : 'contained'}
              onMouseEnter={() => setisSelected(false)}
            >
              Visit iOS Portal
            </Button>
          </a>

        </motion.div>

        {/* Displaying company features with animated cards */}
        <motion.div
          className='flex-center gap-5 mt-12 w-full flex-wrap '
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className='flex-center'>
              <Card
                Icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Company statistics section showing key metrics */}
        <motion.div
          className="py-16 bg-white mt-10"
          variants={itemVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">500+</div>
                <p className="text-gray-600">Healthcare Partners</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">15+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">10k+</div>
                <p className="text-gray-600">Products Delivered</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-primary mb-2">99%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section >
  );
};

export default Hero;

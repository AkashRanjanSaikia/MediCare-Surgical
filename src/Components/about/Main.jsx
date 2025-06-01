import { motion } from "motion/react";
import { CheckCircle } from 'lucide-react';

// Animation variants for container and items using Framer Motion.

const containerVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Main = () => {
  return (
    <motion.section className="bg-gradient-to-br from-secondary via-white to-primary/5 pt-15 mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible" 
    >
      {/* Heading and intro paragraph */}

      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" variants={itemVariants}>
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            About
            <span className="block font-semibold text-primary">MediCare Surgical</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            For over a decade, we've been dedicated to providing healthcare professionals
            with the highest quality medical surgical equipment and exceptional service.
          </p>
        </div>
      </motion.div>

      {/* Mission statement and image */}

      <motion.div className="pt-0 mt-5 sm:mt-0" variants={itemVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="ml-5">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower healthcare professionals with reliable, high-quality medical surgical
                equipment that enhances patient care and improves health outcomes. We bridge the
                gap between innovation and accessibility in medical technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 mt-1">
                    Serving distributors, pharmacies, hospitals, and individual practitioners
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 mt-1">
                    Maintaining rigorous quality standards and safety certifications
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 mt-1">
                    Providing comprehensive support and expert consultation services
                  </p>
                </div>
              </div>
            </div>


            {/* Mission related image */}
            
            <div className="ml-5 p-8 rounded-lg mt-10">
              <img
                src='./aboutPage.jpg'
                alt="Healthcare professional using medical equipment"
                className="rounded-lg shadow-sm w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Main
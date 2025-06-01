import { values } from "../../Constants";
import Card from './Card';
import { motion } from "framer-motion";

// Variants for the container to stagger the animation of child components

const containerVariants = {
  hidden: {}, // No animation initially
  visible: {
    transition: {
      delayChildren: 0.3,   // Delay before children start animating
      staggerChildren: 0.2, // Delay between children animations
    },
  },
};



const Values = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and define our commitment to <br />
            excellence
          </p>
        </div>


        {/* Motion container for Cards with staggered animation */}

        
        <motion.div
          className="flex-center gap-6 mt-15 w-full  flex-col sm:flex-row "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <Card
              key={index}
              Icon={value.icon}
              title={value.title}
              description={value.description}
            />

          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;

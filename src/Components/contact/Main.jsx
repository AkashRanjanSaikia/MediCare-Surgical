import { contactInfo } from "../../Constants";
import Card from "./Card";
import { motion } from "framer-motion";

// Container animation variants
const containerVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};



const Main = () => {
    return (
        <section className="bg-gradient-to-br from-secondary via-white to-primary/5 py-20 mt-10">
            {/* Header and Intro */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                        Contact
                        <span className="block font-semibold text-primary">Our Team</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Ready to discuss your medical equipment needs? Get in touch with our
                        expert team for personalized assistance and solutions.
                    </p>
                </div>
            </motion.div>

            {/* Contact Cards with Staggered Animation */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    className="flex justify-center gap-6 flex-wrap xl:flex-nowrap"
                    variants={containerVariants}
                >
                    {contactInfo.map((info, index) => (
                            <Card
                                key={index}
                                Icon={info.icon}
                                title={info.title}
                                subtitle={info.subtitle}
                                description={info.details}
                            />    
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Main;

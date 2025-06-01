import { motion } from "framer-motion"; // Fix: correct package name is 'framer-motion'

// Animation variants for each card (child)
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};

// Props:
//   Icon: React component for the icon
//   title: string
//   description: string
//   subtitle: string (optional)

const Card = ({ Icon, title, description, subtitle }) => {
    return (
        <motion.div
            className="bg-blue-200 shadow-md rounded-xl w-4/5 max-w-sm border flex-center flex-col text-center h-60 gap-2 p-4"
            variants={cardVariants}
        >
            <div className="bg-gray-900/10 backdrop-blur-md rounded-full border border-white/5 shadow-sm p-4 mb-2">
                <Icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-900">{description}</p>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </motion.div>
    );
};

export default Card;

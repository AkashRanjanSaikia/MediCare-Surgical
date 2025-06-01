import { motion } from "framer-motion";
const Card = ({ Icon, title, description }) => {

    // Animation variants for the card
    
    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };
    return (
        <motion.div
            className="bg-blue-200 shadow-md rounded-xl p-6 w-4/5 max-w-sm border flex-center flex-col text-center gap-4 h-65"
            variants={itemVariants}
        >
            <div className="bg-gray-900/10 backdrop-blur-md rounded-full border border-white/5 shadow-sm p-4">
                <Icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default Card;

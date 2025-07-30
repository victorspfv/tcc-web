import { motion } from "framer-motion";

const shapeVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50, transform: "translateY(100px)" },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.4
        },
        transform: "translateY(0px)"
    },
    hover: {
        transform: "translateY(-10px)"
    }
};

export default function HeroShape() {
    return (
        <motion.svg 
        width="1073" 
        viewBox="0 0 1073 401" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        variants={shapeVariants} 
        initial="hidden" 
        animate="visible"
        transition={{ delay: 0.4 }}
        >
            <motion.g clipPath="url(#clip0_9_6)">
                <motion.circle cx="536.5" cy="536.5" r="536.5" className="fill-gray-100" />
            </motion.g>
            <motion.defs>
                <motion.clipPath id="clip0_9_6">
                    <motion.rect width="1073" height="401" fill="white" />
                </motion.clipPath>
            </motion.defs>
        </motion.svg>
    );
}

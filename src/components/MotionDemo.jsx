import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcReadingEbook } from "react-icons/fc";
import project from "./../assets/images/new.jpg";

const MotionCard = ({ data }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="parent-card-motion" onMouseOver={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>
            <motion.div
                layout
                transition={{ layout: { duration: 0.4, type: "string" } }}
                whileHover={{ scale: 1.05 }}

                onClick={() => setOpen(!open)}
                className="motion-card"
            >
                {open &&
                    <AnimatePresence>
                        <motion.img
                            className="motion-image"
                            key={data?.image}
                            src={data?.image}
                            // transition={{ delay: 1 }}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                        />
                    </AnimatePresence>
                }

                <motion.div layout='position' className="motion-header">
                    {data?.name} <FcReadingEbook />
                </motion.div>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, color: "gray" }}
                        className="motion-description"
                    >
                        {data?.description}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default MotionCard;

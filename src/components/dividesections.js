import React from 'react';
import { motion } from "framer-motion";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import { divideAnim } from "../config/animation";

function DivideSections(props) {
    return (
        <motion.div>
            <Container sx={{ width: "90%" }}>
                <Divider sx={{ pt: 10 }}>
                    <motion.div
                        variants={divideAnim}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        whileHover={{
                            backgroundColor: ['hsla(255, 255, 255, 0)', 'hsla(255, 255, 255, 1)'],
                        }}
                        style={{ borderRadius: "16px" }}
                    >
                        <Chip label={props.label} />
                    </motion.div>
                </Divider>
                {props.description && <motion.p
                    whileHover={{
                        backgroundColor: ['hsla(255, 255, 255, 0)', 'hsla(255, 255, 255, 1)'],
                    }}
                    animate={{ opacity: 1 }}
                    style={{ textAlign: "center", borderRadius: "15px" }}
                >
                    {props.description}
                </motion.p>}
            </Container>
        </motion.div>
    );
}

export default DivideSections;
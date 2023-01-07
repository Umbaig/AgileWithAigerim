import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import { motion } from "framer-motion";
import { leftAnim, rightAnim } from "../config/animation"
import DivideSections from './dividesections';

function Certifications() {
    return (
        <>
            <DivideSections label="CERTIFICATIONS" />
            <Grid container justifyContent="center" spacing={8} sx={{ p: 3, pb: 50 }}>
                <Grid item align="right" md={4}>
                    <motion.div style={{ height: "100%" }} variants={leftAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} align="center" sx={{ height: "100%", maxWidth: 500 }} >
                            <img src="/pictures/graduation.jpg" style={{
                                margin: "40px 0",
                                borderRadius: "4px"
                            }} />
                        </Card>
                    </motion.div>
                </Grid>
                <Grid align="left" item md={4}>
                    <motion.div style={{ height: "100%" }} variants={rightAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} align="center" sx={{ height: "100%", maxWidth: 500 }}>
                            <CardMedia
                                sx={{ height: 224, width: 221 }}
                                image="/pictures/certification logo.jpg"
                                title="green iguana"
                            />
                            <CardMedia
                                sx={{ height: 268, width: 350 }}
                                image="/pictures/certificate.png"
                                title="green iguana"
                            />
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}

export default Certifications
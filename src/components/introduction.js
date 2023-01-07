import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { motion } from "framer-motion";
import { leftAnim, rightAnim } from "../config/animation"
import DivideSections from './dividesections';

function Introduction() {
    return (
        <>
            <DivideSections label="INTRODUCTION" />
            <Grid justifyContent="center" container spacing={8} sx={{ p: 3, pb: 50 }}>
                <Grid item align="right" md={4}>
                    <motion.div style={{ height: "100%" }} variants={leftAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} align="center" sx={{ display: 'flex', alignItems: 'center', maxWidth: 500, height: "100%" }} >
                            <Typography sx={{ p: 3 }} variant="h4">
                                Hi, I'm Aigerim Umbetova and I am certified Scrum Master
                            </Typography>
                        </Card>
                    </motion.div>
                </Grid>
                <Grid align="left" item md={4}>
                    <motion.div variants={rightAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} align="center" sx={{ maxWidth: 500 }}>
                            <CardMedia
                                sx={{ height: 400 }}
                                image="/pictures/aigerim.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Aigerim Umbetova
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Hi, I am a scrum master for multiple years now, worked at multiple companies.
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default Introduction;
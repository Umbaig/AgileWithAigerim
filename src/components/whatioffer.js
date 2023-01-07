import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { leftAnim, rightAnim } from "../config/animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DivideSections from './dividesections';

function WhatIoffer() {
    return (
        <>
            <DivideSections label="WHAT I OFFER" />
            <Grid justifyContent="center" container spacing={8} sx={{ p: 3, pb: 50 }}>
                <Grid align="right" item md={4}>
                    <motion.div variants={leftAnim} initial="initial" animate="animate" exit="exit">
                        <Link to="/courseandbonus" style={{ color: "inherit", textDecoration: "inherit" }}>
                            <Card elevation={16} align="center" sx={{ maxWidth: 500, height: "100%" }}>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{ height: 400 }}
                                        image="/pictures/avatarLearn.png"
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Udemy Course + Bonus
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Check out my Udemy Course here, if you haven"t already. If you came for the bonus please click on this card!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </motion.div>
                </Grid>
                <Grid align="left" item md={4}>
                    <motion.div variants={rightAnim} initial="initial" animate="animate" exit="exit">
                        <Link to="/onlineconsultation" style={{ color: "inherit", textDecoration: "inherit" }}>
                            <Card elevation={16} align="center" sx={{ maxWidth: 500, height: "100%" }}>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{ height: 400 }}
                                        image="/pictures/avatarWave.png"
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            1:1 Online Consultation
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            If you would like to learn more about scrum or agile please click this card and fill out the form!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default WhatIoffer;
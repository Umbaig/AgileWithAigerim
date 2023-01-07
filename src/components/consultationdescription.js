import * as React from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { upAnim } from "../config/animation"
import DivideSections from './dividesections';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function ConsultationDesc() {
    return (
        <>
            <DivideSections label="CONSULTATION" />
            <Grid justifyContent="center" container spacing={8} sx={{ p: 3, pb: 50 }}>
                <Grid item align="center" lg={10}>
                    <motion.div style={{ height: "100%" }} variants={upAnim} initial="initial" animate="animate" exit="exit">
                        <Card sx={{ maxWidth: 750 }}>
                            <CardMedia
                                sx={{ height: 500 }}
                                image="/pictures/avatarWave.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Request Consultation From Me
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    I would like to help you with any question you might have about Agile, Scrum or maybe with your corporate career in
                                    general. Please fill out the form below to schedule 1:1 online session with me.
                                </Typography>
                            </CardContent>
                            <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40, pb: 3 }} />
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}

export default ConsultationDesc
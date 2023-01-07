import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from "framer-motion";
import { upAnim } from "../config/animation"
import DivideSections from './dividesections';

function Bonus() {
    return (
        <>
            <DivideSections label="🎉BONUS🎉" />
            <Grid justifyContent="center" container sx={{ p: 3 }}>
                <Grid align="center" item lg={10}>
                <motion.div style={{ height: "100%" }} variants={upAnim} initial="initial" animate="animate" exit="exit">
                    <Card elevation={16} sx={{ maxWidth: 750 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="340"
                            image="/pictures/bonus.png"
                        />
                        <CardContent align="left" sx={{ pt: 3 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Download the bonus of my course!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                "Checklist for Scrum Events"
                            </Typography>
                        </CardContent>
                        <Box sx={{ '& > :not(style)': { m: 1 }, pb: 3 }}>
                            <Fab variant="extended" color="primary" aria-label="add">
                                <DownloadIcon sx={{ mr: 1 }} />
                                <a style={{ color: "inherit", textDecoration: "inherit" }} href="/assets/PDF/Checklist for Scrum meetings Bonus from Aigerim.pdf" download>
                                    Click To Download
                                </a>
                                <DownloadIcon sx={{ ml: 1 }} />
                            </Fab>
                        </Box>
                    </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}

export default Bonus
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { motion } from "framer-motion";
import { upAnim } from "../config/animation"
import DivideSections from './dividesections';

function ContactMe() {

    const theme = useTheme();

    return (
        <>
            <DivideSections label="CONTACT ME" />
            <Grid justifyContent="center" container sx={{ p: 3 }}>
                <Grid align="center" item lg={10}>
                    <motion.div variants={upAnim} initial="initial" animate="animate" exit="exit">
                        <a href="https://www.linkedin.com/in/aigerimumbetova/" style={{ textDecoration: "inherit" }}>
                            <Card elevation={16}
                                sx={{
                                    [theme.breakpoints.down('xl')]: {
                                        maxWidth: 500,
                                    },
                                    [theme.breakpoints.up('xl')]: {
                                        maxWidth: 750,
                                    }
                                }}
                            >
                                <CardActionArea>
                                    <Typography sx={{ pt: 6, pb: 2 }} variant="h4">
                                        Get in touch with me trough LinkedIn
                                    </Typography>
                                    <motion.svg
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 1 },
                                            rotate: 360
                                        }}
                                        style={{ maxWidth: "5rem", paddingBottom: "2rem", fill: "#0072b1" }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512">
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                    </motion.svg>
                                </CardActionArea>
                            </Card>
                        </a>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}

export default ContactMe;
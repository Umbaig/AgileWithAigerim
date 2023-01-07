import * as React from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { upAnim } from "../config/animation"
import DivideSections from './dividesections';

function ConsultationForm() {
    return (
        <>
            <DivideSections label="CONSULTATION FORM" />
            <Grid justifyContent="center" container spacing={8} sx={{ p: 3 }}>
                <Grid item align="center" xs={12} lg={10}>
                    <motion.div style={{ height: "100%" }} variants={upAnim} initial="initial" animate="animate" exit="exit">
                        <Card sx={{ maxWidth: 750 }}>
                            <iframe style={{ paddingTop: 30, paddingBottom: 30 }} src="https://docs.google.com/forms/d/e/1FAIpQLSdHoEmcf1d_NPIFMzMFrPwszZ8-Pv7av82N3sIpv-dU-_0iJw/viewform?embedded=true"
                                width="90%"
                                height="1350"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0">
                                Loading…
                            </iframe>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}

export default ConsultationForm
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { motion } from "framer-motion";
import { upAnim } from "../config/animation"
import DivideSections from './dividesections';

function Journey() {
    const desc = "I am Certified Scrum Master with experience in IT infrastructure support, SharePoint Server Administration and Project Track lead. I have a passion for Agile Transformation, its implementation and assisting teams to deliver outmost productivity and value to corporations."

    return (
        <>
            <DivideSections label="MY JOURNEY" description={desc} />
            <Grid justifyContent="center" container spacing={8} sx={{ p: 3 }}>
                <Grid item align="center" md={4}>
                    <motion.div style={{ height: "100%" }} variants={upAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} align="center" sx={{ maxWidth: 750 }}>
                            <List sx={{ pb: 3, maxWidth: 500, bgcolor: 'background.paper' }}>
                                <Divider sx={{ pt: 3 }}><b>WORK EXPERIENCE</b></Divider>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Ericsson - Scrum Master" secondary="May 2022 - Present" />
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="ExxonMobil - Scrum Master" secondary="August 2021 - May 2022" />
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="ExxonMobil - SharePoint Support Engineer" secondary="August 2019  - August 2021" />
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="ExxonMobil - Intern SharePoint Support Engineer" secondary="Dec 2018 - September 2019" />
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="System Administrator - National Information Technologies" secondary="September 2016 - August 2017" />
                                </ListItem>
                                <Divider sx={{ pt: 3 }}><b>EDUCATION</b></Divider>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <SchoolIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="University of Pecs - Master degree in Computer Science Engineering" secondary="September 2017 - June 2019" />
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <SchoolIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Eurasian Natioanal University named after L.N.Gumilyev - Bachelor in Engineering and Technology" secondary="September 2012 - June 2016" />
                                </ListItem>
                                <Divider sx={{ pt: 3 }}><b>CERTIFICATION</b></Divider>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkspacePremiumIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Certified ScrumMaster" secondary="Scrum Alliance" />
                                </ListItem>
                                <Divider variant="middle" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WorkspacePremiumIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Certified SAFe 5 Agilist" secondary="Scaled Agile Framework (SAFe)" />
                                </ListItem>
                            </List>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default Journey;
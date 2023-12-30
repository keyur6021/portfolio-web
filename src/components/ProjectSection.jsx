import React from "react";
import PortfolioCard from "./PortfolioCard";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { RiCodeSSlashFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import MotionCard from "./MotionDemo";

const ProjectSection = () => {

    return (
        <div className="main-parent">
            <Box className='header-project'>
                ! Projects
            </Box>
            <Grid container spacing={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8]?.map((data) => {
                    return (
                        <Grid item xl={3} lg={4} md={6} sm={6} xs={12}>
                            {/* <PortfolioCard /> */}
                            <MotionCard />
                        </Grid>
                    );
                })}
            </Grid>
            {
                (isMobile) &&
                <div className="parent-one-social">
                    <div className="parent-social-icons-mobile">
                        <Link to='https://www.linkedin.com/in/er-keyur-mulani-b74943216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                            <div className="parent-social">
                                <RiLinkedinFill />
                            </div>
                        </Link>
                        <Link to='https://github.com/keyur6021'>
                            <div className="parent-social">
                                <BsGithub />
                            </div>
                        </Link>
                        <Link to='https://twitter.com/Keyurmulani6021?t=33fZPsq-vcyezLESlC7mBg&s=09'>
                            <div className="parent-social">
                                <RiTwitterXFill />
                            </div>
                        </Link>
                        <Link to='https://www.instagram.com/keyur_patel_6021/?utm_medium=copy_link'>
                            <div className="parent-social">
                                <LuInstagram />
                            </div>
                        </Link>
                    </div>
                </div>
            }


            <div class="morphing">
                <div class="word"> Hey !</div>
                <div class="word"> Thanks </div>
                <div class="word"> For </div>
                <div class="word"> Connecting...</div>
                <div class="word"> Us ! </div>
                <div class="word"> 🔥 </div>
            </div>
        </div>
    );
};

export default ProjectSection;
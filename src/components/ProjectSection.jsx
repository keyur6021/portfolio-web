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
import Cloud from './../assets/images/cloud.png';
import trend from './../assets/images/trend.png';
import tesoract from './../assets/images/tesoract.png';
import inovac from './../assets/images/inovac.png';

const ProjectSection = () => {

    const projectData = [
        {
            name: 'Cloudairy',
            image: Cloud,
            description: "Project helps on Cloud cost optimization with a strategic approach to controlling and minimizing the expenses associated with our business. My role was implementing complex design structure and integrat the charts like (pie chart, donute chart) using Redux"
        },
        {
            name: 'Tesoract-App',
            image: tesoract,
            description: "A project aim to create a single platform which can be linked or access multiple apps to create user- friendly interface. My role was frontend developer"
        }, {
            name: 'Trendappend',
            image: trend,
            description: "- Project is similar to Social media app tiktok, but here user can buy/ sell any products in any currency"
        }, {
            name: 'Innovec Project',
            image: inovac,
            description: "- A project for mechanical industry where user can easily track all the informations productivity, Quality, Time management and many more"
        },
    ]

    return (
        <div className="main-parent">
            <Box className='header-project'>
                ! Projects
            </Box>
            <Grid container spacing={2}>
                {projectData?.map((data, index) => {
                    return (
                        <Grid item xl={3} lg={4} md={6} sm={6} xs={12} key={index}>
                            {/* <PortfolioCard /> */}
                            <MotionCard data={data} />
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
import React from "react";
import PortfolioCard from "./PortfolioCard";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

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
                            <PortfolioCard />
                        </Grid>
                    );
                })}
            </Grid>
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
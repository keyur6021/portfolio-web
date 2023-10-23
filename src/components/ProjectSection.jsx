import React from "react";
import PortfolioCard from "./PortfolioCard";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

const ProjectSection = () => {

    return (
        <div className="main-parent">
            <Box className='header-project'>
                Projects
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
        </div>
    );
};

export default ProjectSection;
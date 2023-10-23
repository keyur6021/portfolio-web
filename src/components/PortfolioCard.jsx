import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import user from "../assets/images/headerImg.png";

const PortfolioCard = () => {
    return (
        <Card sx={{ boxShadow: 'none', borderRadius: '10px' }}>
            <Box sx={{ overflow: "hidden", position: "relative" }}>
                <CardMedia
                    component="img"
                    height="220"
                    image={user}
                    alt="green iguana"
                    className="project-card"
                />
            </Box>
            <CardContent sx={{ p: 1.5 }}>
                <Typography
                    sx={{ fontWeight: "bold", fontSize: '1.4rem' }}
                    gutterBottom
                >
                    Project Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PortfolioCard;
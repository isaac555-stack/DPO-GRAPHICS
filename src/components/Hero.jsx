import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Grid2,
  alpha,
} from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import profileImage from "../assets/DPO.png";

// Unified Brand Palette
const INDIGO = "#6366F1";
const GOLD = "#FACC15";
const SLATE = "#0F172A";

const HeroSection = () => {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        bgcolor: SLATE, // Background unified with other sections
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          minHeight: { xs: "auto", md: "100vh" },
          display: "flex",
          alignItems: "center",
          position: "relative",
          pt: { xs: 15, md: 6 },
          pb: { xs: 8 },
        }}
      >
        {/* Cinematic Indigo Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "0%",
            left: "0%",
            width: "100%",
            height: "100%",
            background: `radial-gradient(circle at 80% 20%, ${alpha(
              INDIGO,
              0.15,
            )} 0%, transparent 50%)`,
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg">
          <Grid2 container spacing={{ xs: 6, md: 10 }} alignItems="center">
            {/* Left Content */}
            <Grid2 size={{ xs: 12, md: 7 }} sx={{ zIndex: 1 }}>
              <Stack
                spacing={4}
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                {/* Status Badge */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    bgcolor: alpha(INDIGO, 0.1),
                    border: `1px solid ${alpha(INDIGO, 0.3)}`,
                    px: 2.5,
                    py: 1,
                    borderRadius: "100px",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: GOLD,
                      borderRadius: "50%",
                      mr: 1.5,
                      boxShadow: `0 0 10px ${GOLD}`,
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: "white",
                      fontWeight: 800,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    Available for Mentorship
                  </Typography>
                </Box>

                {/* Hero Headline */}
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "3.0rem", md: "3.5rem" },
                    fontWeight: 900,
                    lineHeight: 0.95,
                    color: "white",
                    letterSpacing: "-3px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Turning Ideas <br />
                  Into{" "}
                  <Box component="span" sx={{ color: INDIGO }}>
                    Visual
                  </Box>{" "}
                  <Box
                    component="span"
                    sx={{
                      color: `${GOLD}`,
                    }}
                  >
                    Icons.
                  </Box>
                </Typography>

                {/* Subtext */}
                <Typography
                  sx={{
                    color: alpha("#FFF", 0.6),
                    fontSize: { xs: "1.1rem", md: "1.1rem" },
                    maxWidth: "550px",
                    lineHeight: 1.8,
                    textAlign: { xs: "center", md: "left" },
                    fontWeight: 400,
                  }}
                >
                  I'm <strong style={{ color: "white" }}>David Opara</strong>,
                  an architectural Graphic Designer based in Nigeria. I've
                  transitioned my passion for branding into a mission to
                  <strong style={{ color: "white" }}>
                    {" "}
                    guide emerging designers
                  </strong>
                  , helping them master their craft and navigate the creative
                  industry.
                </Typography>

                {/* Action Buttons */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
                >
                  <Button
                    variant="contained"
                    href="#works"
                    sx={{
                      bgcolor: INDIGO,
                      color: "white",
                      "&:hover": { bgcolor: "white", color: SLATE },
                      px: 5,
                      py: 2.2,
                      borderRadius: "50px",
                      textTransform: "none",
                      fontWeight: 900,
                      fontSize: "1rem",
                      boxShadow: `0 20px 40px ${alpha(INDIGO, 0.3)}`,
                    }}
                    endIcon={<PlayArrowRoundedIcon />}
                  >
                    Explore My Portfolio
                  </Button>

                  <Button
                    variant="outlined"
                    href="https://www.linkedin.com/in/david-opara/"
                    target="_blank"
                    sx={{
                      borderColor: alpha("#FFF", 0.2),
                      color: "white",
                      "&:hover": {
                        borderColor: GOLD,
                        bgcolor: alpha(GOLD, 0.05),
                      },
                      px: 5,
                      py: 2.2,
                      borderRadius: "50px",
                      textTransform: "none",
                      fontWeight: 900,
                    }}
                    startIcon={<LinkedInIcon />}
                  >
                    Let's Chat
                  </Button>
                </Stack>
              </Stack>
            </Grid2>

            {/* Right Content - The "Centerpiece" */}
            <Grid2 size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Rotating Geometric Ring */}
                <Box
                  sx={{
                    position: "absolute",
                    width: { xs: "300px", md: "500px" },
                    height: { xs: "300px", md: "500px" },
                    border: `1px solid ${alpha(INDIGO, 0.2)}`,
                    borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
                    animation: "morph 15s ease-in-out infinite",
                    "@keyframes morph": {
                      "0%": {
                        borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
                      },
                      "50%": {
                        borderRadius: "70% 30% 30% 70% / 50% 50% 50% 50%",
                      },
                      "100%": {
                        borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
                      },
                    },
                  }}
                />

                <Box
                  component="img"
                  src={profileImage}
                  alt="David Opara"
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    maxWidth: "500px",
                    filter: "drop-shadow(0 30px 100px rgba(0,0,0,0.5))",
                    transition: "transform 0.5s ease",
                    "&:hover": { transform: "scale(1.02)" },
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      {/* Marquee Ticker */}
      <Box
        sx={{
          bgcolor: alpha("#FFF", 0.03),
          borderTop: `1px solid ${alpha("#FFF", 0.05)}`,
          py: 3,
          margin: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "marquee 30s linear infinite",
            "@keyframes marquee": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[1, 2].map((group) => (
            <Stack
              key={group}
              direction="row"
              alignItems="center"
              spacing={10}
              sx={{ px: 5 }}
            >
              {[
                "Brand Strategy",
                "Logo Design",
                "Visual Arts",
                "Flyer Designs",
                "Social Media",
              ].map((text) => (
                <Stack
                  key={text}
                  direction="row"
                  alignItems="center"
                  spacing={10}
                >
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 900,
                      color: alpha("#FFF", 1),
                      textTransform: "uppercase",
                      letterSpacing: 4,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {text}
                  </Typography>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      bgcolor: INDIGO,
                      borderRadius: "50%",
                    }}
                  />
                </Stack>
              ))}
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

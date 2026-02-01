import React from "react";
import { Box, Typography, Container, Stack, Grid2, alpha } from "@mui/material";
import { motion } from "framer-motion";
import profileImage from "../assets/DPO.png";

// Brand Palette
const INDIGO = "#6366F1";
const GOLD = "#FACC15";
const SLATE = "#0F172A";

const AboutSection = () => {
  const stats = [
    { label: "Projects Completed", value: "300+" },
    { label: "Satisfied Clients", value: "50+" },
    { label: "Years of Experience", value: "6+" },
  ];

  const floatingTags = [
    { name: "Brand Strategy", top: "10%", left: "-5%", rotate: "-12deg" },
    { name: "Visual Identity", bottom: "25%", right: "-8%", rotate: "8deg" },
    { name: "UI Architecture", top: "45%", left: "-12%", rotate: "5deg" },
    { name: "Print Specialist", bottom: "8%", left: "5%", rotate: "-5deg" },
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        bgcolor: SLATE,
        color: "white",
        py: { xs: 10, md: 0 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cinematic Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${alpha(
            INDIGO,
            0.15,
          )} 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid2 container spacing={{ xs: 8, md: 15 }} alignItems="center">
          {/* Left Side - Profile Visuals */}
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: "relative" }}>
              {/* Gold Decorative Frame */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                sx={{
                  position: "absolute",
                  top: 30,
                  left: 30,
                  right: -30,
                  bottom: -30,
                  border: `1px solid ${alpha(GOLD, 0.3)}`,
                  borderRadius: "40px",
                  zIndex: 0,
                }}
              />

              {/* Main Image Container */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  borderRadius: "40px",
                  overflow: "hidden",
                  boxShadow: `0 40px 80px ${alpha("#000", 0.4)}`,
                  border: `1px solid ${alpha("#FFF", 0.1)}`,
                }}
              >
                <Box
                  component="img"
                  src={profileImage}
                  alt="David Opara"
                  sx={{
                    width: "100%",
                    display: "block",
                    filter: "grayscale(30%) contrast(1.1)",
                    transition: "transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Box>

              {/* Glassmorphic Tags */}
              {floatingTags.map((tag, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  sx={{
                    position: "absolute",
                    top: tag.top,
                    left: tag.left,
                    right: tag.right,
                    bottom: tag.bottom,
                    bgcolor: alpha("#FFF", 0.05),
                    backdropFilter: "blur(15px)",
                    color: "white",
                    px: 3,
                    py: 1.2,
                    borderRadius: "100px",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    zIndex: 3,
                    border: `1px solid ${alpha("#FFF", 0.1)}`,
                    transform: `rotate(${tag.rotate})`,
                    display: { xs: "none", sm: "block" },
                    boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
                  }}
                >
                  <Box component="span" sx={{ color: GOLD, mr: 1 }}>
                    ●
                  </Box>
                  {tag.name}
                </Box>
              ))}
            </Box>
          </Grid2>

          {/* Right Side - Narrative & Stats */}
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Stack spacing={5}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: INDIGO,
                    fontWeight: 900,
                    letterSpacing: 5,
                    mb: 2,
                    display: "block",
                  }}
                >
                  Legacy & Vision
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "3.0rem", md: "3.5rem" },
                    lineHeight: 1,
                    mb: 4,
                    letterSpacing: "-2px",
                  }}
                >
                  Crafting Digital{" "}
                  <Box component="span" sx={{ color: INDIGO }}>
                    Excellence
                  </Box>{" "}
                  Through Intent.
                </Typography>

                <Typography
                  sx={{
                    color: alpha("#FFF", 0.6),
                    fontSize: "1.2rem",
                    lineHeight: 1.8,
                    maxWidth: 600,
                    fontWeight: 400,
                  }}
                >
                  Based in Nigeria, I bridge the gap between technical precision
                  and creative soul. With over 6 years of experience, my
                  mentorship is rooted in
                  <Box
                    component="span"
                    sx={{ color: "white", fontWeight: 700 }}
                  >
                    {" "}
                    structural minimalism.
                  </Box>
                  <br />
                  <br />I don’t just teach design; I help creatives develop a
                  visual language that commands respect and survives the market.
                  I’m here to show you that every pixel should be a strategic
                  decision.
                </Typography>
              </Box>

              {/* Stats Layout */}
              <Grid2 container spacing={4}>
                {stats.map((stat, index) => (
                  <Grid2 key={index} size={{ xs: 6, sm: 4 }}>
                    <Box
                      sx={{
                        position: "relative",
                        transition: "0.4s",
                        "&:hover": { transform: "translateY(-5px)" },
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 900,
                          color: GOLD,
                          mb: 0.5,
                          fontSize: "2.8rem",
                          letterSpacing: "-1px",
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: alpha("#FFF", 0.4),
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: 2,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default AboutSection;

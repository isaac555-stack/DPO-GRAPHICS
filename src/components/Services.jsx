import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Paper,
  Grid2,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ArrowForwardRounded as ArrowIcon,
  ArchitectureRounded as DesignIcon,
  DesignServicesRounded as CreativeIcon,
  AutoAwesomeRounded as BrandIcon,
} from "@mui/icons-material";

// Brand Palette to match About Section
const INDIGO = "#6366F1";
const GOLD = "#FACC15";
const SLATE = "#0F172A";

const services = [
  {
    id: "01",
    title: "Design Principles & Critique",
    description:
      "Master the 'why' behind the 'what.' I provide deep-dive portfolio reviews and technical guidance to help you move beyond software skills into high-level visual execution.",
    icon: <DesignIcon sx={{ fontSize: 32 }} />,
  },
  {
    id: "02",
    title: "The Business of Creative",
    description:
      "Learn how to bridge the gap between art and commerce. I mentor designers on client communication, project management, and how to design with a marketing mindset.",
    icon: <CreativeIcon sx={{ fontSize: 32 }} />,
  },
  {
    id: "03",
    title: "Strategic Brand Building",
    description:
      "Go deeper than logos. I teach the framework for developing full brand identities, helping you understand how to build systems that scale and endure.",
    icon: <BrandIcon sx={{ fontSize: 32 }} />,
  },
];
const ServicesSection = () => {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        bgcolor: SLATE,
        py: { xs: 12, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Cinematic Glow - Matches About Section */}
      <Box
        sx={{
          position: "absolute",
          top: "-15px",
          left: "-5%",
          width: "500px",
          height: "500px",
          background: `radial-gradient(circle, ${alpha(
            INDIGO,
            0.1,
          )} 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Stack
          spacing={2}
          sx={{
            mb: 10,
            textAlign: { xs: "left", md: "center" },
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              color: "white",
              fontSize: { xs: "3.0rem", md: "3.5rem" },
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Design Solutions that <br />
            <Box component="span" sx={{ color: GOLD }}>
              Command Attention.
            </Box>
          </Typography>
        </Stack>

        {/* Services Grid */}
        <Grid2 container spacing={4}>
          {services.map((service, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 4 }}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                elevation={0}
                sx={{
                  p: 4,
                  height: "350px",
                  borderRadius: "40px",
                  bgcolor: alpha("#FFF", 0.03),
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${alpha("#FFF", 0.08)}`,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.5s cubic-bezier(0.2, 1, 0.3, 1)",
                  "&:hover": {
                    bgcolor: alpha("#FFF", 0.05),
                    transform: "translateY(-15px)",
                    borderColor: alpha(GOLD, 0.4),
                    boxShadow: `0 40px 80px ${alpha("#000", 0.4)}`,
                    "& .service-arrow": {
                      color: GOLD,
                      transform: "translateX(8px)",
                    },
                    "& .service-id": { color: GOLD, opacity: 0.2 },
                  },
                }}
              >
                {/* Large Background Number - Matches Stats Style */}
                <Typography
                  className="service-id"
                  sx={{
                    position: "absolute",
                    top: 40,
                    right: 40,
                    fontSize: "4.5rem",
                    fontWeight: 900,
                    color: "white",
                    opacity: 0.05,
                    lineHeight: 1,
                    transition: "0.4s",
                  }}
                >
                  {service.id}
                </Typography>

                {/* Icon Circle */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 70,
                    height: 70,
                    borderRadius: "20px",
                    bgcolor: alpha(INDIGO, 0.15),
                    color: INDIGO,
                    mb: 5,
                    border: `1px solid ${alpha(INDIGO, 0.2)}`,
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    mb: 2,
                    color: "white",
                    fontSize: "1.75rem",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  sx={{
                    color: alpha("#FFF", 0.5),
                    mb: 6,
                    lineHeight: 1.8,
                    fontSize: "1.05rem",
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default ServicesSection;

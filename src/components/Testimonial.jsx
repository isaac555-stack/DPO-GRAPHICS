import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Avatar,
  Paper,
  Grid2,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

// Unified Brand Palette
const INDIGO = "#6366F1";
const GOLD = "#FACC15";
const SLATE = "#0F172A";

const testimonials = [
  {
    name: "Bernice Akpan",
    role: "Event Organizer",
    content:
      "The birthday branding was exceptional. The attention to detail in the notebook covers and digital flyers really made the event stand out!",
  },
  {
    name: "Gbenga Adenuga",
    role: "Pastor",
    content:
      "DPO Graphics consistently delivers high-quality church flyers. The Cross Over and Carol designs were modern, spiritual, and professional.",
  },
  {
    name: "Ikoro Blessing",
    role: "Visual Content Lead",
    content:
      "The brand designs are really professional. The way it is branded shows a deep understanding of dynamic composition and balance.",
  },
];

const TestimonialSection = () => {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: { xs: 12, md: 5 },
        bgcolor: SLATE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cinematic Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          background: `radial-gradient(circle at center, ${alpha(
            INDIGO,
            0.07,
          )} 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Stack
          alignItems={{ xs: "center", md: "center" }}
          spacing={2}
          sx={{ mb: 10 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: INDIGO,
              fontWeight: 900,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            Client Reviews
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.8rem", md: "4rem" },
              textAlign: { xs: "center", md: "center" },
              color: "white",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Stories of{" "}
            <Box component="span" sx={{ color: GOLD }}>
              Impact.
            </Box>
          </Typography>
        </Stack>

        {/* Grid */}
        <Grid2 container spacing={4}>
          {testimonials.map((item, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 6,
                    height: "100%",
                    borderRadius: "40px",
                    position: "relative",
                    bgcolor: alpha("#FFF", 0.03),
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${alpha("#FFF", 0.08)}`,
                    transition: "all 0.5s cubic-bezier(0.2, 1, 0.3, 1)",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      bgcolor: alpha("#FFF", 0.06),
                      transform: "translateY(-15px)",
                      borderColor: alpha(GOLD, 0.4),
                      boxShadow: `0 40px 80px ${alpha("#000", 0.4)}`,
                      "& .quote-icon": { color: GOLD, opacity: 0.8 },
                    },
                  }}
                >
                  <FormatQuoteRoundedIcon
                    className="quote-icon"
                    sx={{
                      position: "absolute",
                      top: 30,
                      right: 40,
                      fontSize: "4rem",
                      color: INDIGO,
                      opacity: 0.2,
                      transition: "0.4s ease",
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      color: alpha("#FFF", 0.7),
                      mb: 6,
                      fontSize: "1.15rem",
                      lineHeight: 1.9,
                      flexGrow: 1,
                      fontWeight: 400,
                    }}
                  >
                    "{item.content}"
                  </Typography>

                  <Stack direction="row" spacing={2.5} alignItems="center">
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: alpha(INDIGO, 0.2),
                        color: "white",
                        fontWeight: 900,
                        fontSize: "1.3rem",
                        border: `1px solid ${alpha(INDIGO, 0.5)}`,
                        boxShadow: `0 10px 20px ${alpha("#000", 0.2)}`,
                      }}
                    >
                      {item.name[0]}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 900,
                          color: "white",
                          fontSize: "1.1rem",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: GOLD,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: 1.5,
                          fontSize: "0.75rem",
                        }}
                      >
                        {item.role}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default TestimonialSection;

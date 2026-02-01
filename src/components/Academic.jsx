import React from "react";
import { Box, Typography, Container, Stack, Grid2, alpha } from "@mui/material";
import { motion } from "framer-motion";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";

// Unified Brand Palette
const INDIGO = "#6366F1";
const GOLD = "#FACC15";
const SLATE = "#0F172A";

const education = [
  {
    year: "2024 - Present",
    degree: "B.Tech Electrical Engineering",
    institution: "Federal University of Technology Minna",
    description:
      "Focusing on the intersection of technology, hardware systems, and digital design architecture.",
  },
  {
    year: "2023",
    degree: "Certified Graphic Designer",
    institution: "Google Career Certificates",
    description:
      "Advanced study in visual hierarchy, design thinking, and high-fidelity brand systems.",
  },
];

const experience = [
  {
    year: "2023 - Present",
    role: "Senior Graphic Designer",
    institution: "Shinelight International School",
    description:
      "Directing complete visual strategy, social media branding, and large-scale print guidelines.",
  },
  {
    year: "2020 - 2022",
    role: "Freelance Brand Identity Designer",
    institution: "Self-Employed",
    description:
      "Partnering with startups worldwide to develop unique visual identities and marketing assets.",
  },
];

const TimelineItem = ({ item, index, icon }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: false }}
  >
    <Box
      sx={{
        borderLeft: `2px dashed ${alpha(INDIGO, 0.2)}`,
        "&:last-child": { pb: 0, borderLeftColor: "transparent" },
      }}
    >
      <Box
        sx={{
          p: 4,
          mt: 3,
          bgcolor: alpha("#FFF", 0.03),
          backdropFilter: "blur(10px)",
          borderRadius: "25px",
          border: `1px solid ${alpha("#FFF", 0.08)}`,
          transition: "all 0.4s cubic-bezier(0.2, 1, 0.3, 1)",
          "&:hover": {
            transform: "translateX(10px)",
            bgcolor: alpha("#FFF", 0.05),
            borderColor: alpha(GOLD, 0.3),
            "& .year-badge": {
              bgcolor: GOLD,
              color: SLATE,
            },
          },
        }}
      >
        <Stack direction={"row"}>
          {/* Glow Marker */}
          <Box
            sx={{
              width: "32px",
              height: "32px",
              mr: 2,
              bgcolor: SLATE,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 15px ${alpha(INDIGO, 0.4)}`,
              color: GOLD,
              zIndex: 2,
              border: `1px solid ${alpha(INDIGO, 0.5)}`,
            }}
          >
            {icon}
          </Box>
          <Typography
            variant="caption"
            className="year-badge"
            sx={{
              color: GOLD,
              fontWeight: 900,
              border: `1px solid ${alpha(GOLD, 0.3)}`,
              px: 2,
              py: 0.8,
              borderRadius: "8px",
              letterSpacing: 1,
              transition: "0.3s",
            }}
          >
            {item.year}
          </Typography>
        </Stack>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            mt: 3,
            color: "white",
            lineHeight: 1.2,
            fontSize: "1.25rem",
          }}
        >
          {item.degree || item.role}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            color: INDIGO,
            fontWeight: 700,
            mb: 2,
            mt: 0.5,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {item.institution}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: alpha("#FFF", 0.5),
            lineHeight: 1.8,
            fontSize: "0.95rem",
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Box>
  </motion.div>
);

const EducationSection = () => {
  return (
    <Box
      component="section"
      id="resume"
      sx={{
        py: { xs: 12, md: 10 },
        bgcolor: SLATE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient Background Light */}
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
            0.05,
          )} 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid2 container spacing={4}>
          {/* Education Column */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack spacing={6}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: INDIGO,
                    fontWeight: 900,
                    letterSpacing: 4,
                    display: "block",
                    mb: 1,
                  }}
                >
                  Academics
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: "white",
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    letterSpacing: "-2px",
                  }}
                >
                  Education
                </Typography>
                <Box
                  sx={{
                    width: 60,
                    height: 4,
                    bgcolor: GOLD,
                    borderRadius: 2,
                    mt: 2,
                  }}
                />
              </Box>
              <Box>
                {education.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    icon={<SchoolRoundedIcon sx={{ fontSize: 18 }} />}
                  />
                ))}
              </Box>
            </Stack>
          </Grid2>

          {/* Experience Column */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack spacing={6}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    color: INDIGO,
                    fontWeight: 900,
                    letterSpacing: 4,
                    display: "block",
                    mb: 1,
                  }}
                >
                  Professional
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: "white",
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    letterSpacing: "-2px",
                  }}
                >
                  Experience
                </Typography>
                <Box
                  sx={{
                    width: 60,
                    height: 4,
                    bgcolor: GOLD,
                    borderRadius: 2,
                    mt: 2,
                  }}
                />
              </Box>
              <Box>
                {experience.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    index={index}
                    icon={<WorkRoundedIcon sx={{ fontSize: 18 }} />}
                  />
                ))}
              </Box>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default EducationSection;

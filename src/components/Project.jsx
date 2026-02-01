import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Grid2,
  Dialog,
  IconButton,
  alpha,
  Fade,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import { motion } from "framer-motion";

// Asset Imports (Keeping your existing imports)
import projectImage4 from "../assets/Christmas CAROL.jpg";
import projectImage5 from "../assets/Venom Perfumes ADJUSTED AD.jpg";
import projectImage7 from "../assets/NEYMAR JNR.jpg";
import projectImage11 from "../assets/DPO GRAPHICS.jpg";

const projects = [
  {
    title: "Christmas Carol",
    category: "Event Branding",
    image: projectImage4,
  },
  { title: "Neymar Junior", category: "Sport Flyer", image: projectImage7 },
  { title: "Cross Over 2024", category: "Marketing", image: projectImage5 },
  {
    title: "Professional Services",
    category: "Visual Identity",
    image: projectImage11,
  },
];

const INDIGO = "#6366F1";
const GOLD = "#FACC15";
const SLATE = "#0F172A";

const ProjectsSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  return (
    <Box
      component="section"
      id="works"
      sx={{
        py: { xs: 10, md: 5 },
        bgcolor: SLATE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Background Light */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: { xs: "300px", md: "600px" },
          height: { xs: "300px", md: "600px" },
          bgcolor: alpha(INDIGO, 0.08),
          filter: "blur(120px)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Stack spacing={2} alignItems="center" sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="overline"
            sx={{
              color: INDIGO,
              fontWeight: 900,
              letterSpacing: 4,
              fontSize: "0.85rem",
              textTransform: "uppercase",
            }}
          >
            Creative Portfolio
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.8rem", md: "4.5rem" },
              color: "white",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            Selected{" "}
            <Box component="span" sx={{ color: GOLD }}>
              Masterpieces
            </Box>
          </Typography>
          <Box
            sx={{ width: 60, height: 4, bgcolor: GOLD, borderRadius: 2, mt: 2 }}
          />
        </Stack>

        {/* Projects Grid */}
        <Grid2 container spacing={{ xs: 4, md: 6 }}>
          {projects.map((project, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: false }}
              >
                <Box
                  onClick={() => handleOpen(project.image)}
                  sx={{
                    position: "relative",
                    borderRadius: "24px", // Slightly tighter corners for professional feel
                    overflow: "hidden",
                    aspectRatio: { xs: "1/1", md: "16/11" },
                    cursor: "pointer",
                    bgcolor: alpha("#000", 0.2),
                    border: `1px solid ${alpha("#FFF", 0.1)}`,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "scale(1.02) translateY(-10px)",
                      borderColor: alpha(GOLD, 0.5),
                      boxShadow: `0 25px 50px -12px ${alpha("#000", 0.5)}`,
                      "& .project-info": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                      "& .project-img": {
                        transform: "scale(1.1)",
                        filter: "grayscale(0%) brightness(1)",
                      },
                      "& .expand-hint": {
                        opacity: 1,
                        transform: "translate(-50%, -50%) scale(1)",
                      },
                    },
                  }}
                >
                  {/* Project Image */}
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(20%) brightness(0.8)",
                      transition: "all 0.8s ease",
                    }}
                  />

                  {/* Centered Icon Hint on Hover */}
                  <Box
                    className="expand-hint"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) scale(0.5)",
                      bgcolor: alpha(INDIGO, 0.9),
                      color: "white",
                      borderRadius: "50%",
                      p: 2,
                      opacity: 0,
                      transition:
                        "0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      zIndex: 3,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    <FullscreenRoundedIcon fontSize="large" />
                  </Box>

                  {/* Gradient Overlay & Info */}
                  <Box
                    className="project-info"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 3, md: 4 },
                      background: `linear-gradient(to top, ${SLATE} 0%, transparent 100%)`,
                      opacity: 0.8,
                      transform: "translateY(10px)",
                      transition: "all 0.4s ease",
                      zIndex: 2,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: GOLD,
                        fontWeight: 800,
                        letterSpacing: 2,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      {project.category}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontWeight: 900,
                        fontSize: "1.5rem",
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Lightbox / Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="lg"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "visible",
            m: 2,
          },
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: alpha(SLATE, 0.95),
              backdropFilter: "blur(12px)",
            },
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: { xs: 10, md: -60 },
            top: { xs: -60, md: 0 },
            color: "white",
            bgcolor: alpha("#fff", 0.1),
            "&:hover": {
              bgcolor: GOLD,
              color: "white",
              transform: "rotate(90deg)",
            },
            transition: "all 0.3s",
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: "2rem" }} />
        </IconButton>

        <Box
          component="img"
          src={selectedImage}
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "90vh",
            borderRadius: "16px",
            objectFit: "contain",
            boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5)`,
          }}
        />
      </Dialog>
    </Box>
  );
};

export default ProjectsSection;

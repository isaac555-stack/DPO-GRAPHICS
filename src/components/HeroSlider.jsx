import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Dialog,
  alpha,
  Fade,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { motion, AnimatePresence } from "framer-motion";

import projectImage1 from "../assets/Academic Seminar READJUSTED VENUE- WELFARE DIRECTOR - ABASI.jpg";
import projectImage2 from "../assets/Bernice BIRTHDAY.jpg";
import projectImage3 from "../assets/Emmanuel Itohowo Anthony Birthday-3.jpg";
import projectImage4 from "../assets/Christmas CAROL.jpg";
// New Imports
import projectImage5 from "../assets/CROSS OVER1.jpg";
import projectImage6 from "../assets/Back2School copy.jpg";
import projectImage7 from "../assets/BMSPORT BACKDROP DESIGN.jpg";
import projectImage8 from "../assets/bernado goal.jpg";
import projectImage9 from "../assets/Dominion Mandate-1.jpg";
import projectImage10 from "../assets/Cleaning services.jpg";
import projectImage11 from "../assets/DPO GRAPHICS.jpg";
import projectImage12 from "../assets/KBS copy.jpg";
import projectImage13 from "../assets/Want a Free Design copy-2.jpg";
import projectImage14 from "../assets/RASHFORD  POSTER-1.jpg";
import projectImage15 from "../assets/Mrs Ikoro copy 5.jpg";
import projectImage16 from "../assets/House Fellowship EXCELLENT ARENA.jpg";
import projectImage17 from "../assets/Happy New month DPO.jpg";
import projectImage18 from "../assets/debate.jpg";
import projectImage19 from "../assets/foden prototype copy.jpg";
import projectImage20 from "../assets/New Week modd.jpg";
import projectImage21 from "../assets/Happy New Year3-1.jpg";

const projects = [
  // --- CHURCH & EVENTS ---
  { title: "Academic Seminar", category: "Flyer Design", image: projectImage1 },
  {
    title: "Christmas Carol",
    category: "Event Branding",
    image: projectImage4,
  },
  { title: "Cross Over 2024", category: "Church Flyer", image: projectImage5 },
  {
    title: "Dominion Mandate",
    category: "Covenant Service",
    image: projectImage9,
  },
  {
    title: "Excellent Arena",
    category: "House Fellowship",
    image: projectImage16,
  },
  {
    title: "Happy New Year",
    category: "Seasonal Greeting",
    image: projectImage21,
  },

  {
    title: "AT'EL Laundry",
    category: "Business Branding",
    image: projectImage10,
  },
  {
    title: "BMSPORT BackDrop",
    category: "Event Backdrop",
    image: projectImage7,
  },
  {
    title: "Business Incubator",
    category: "Program Flyer",
    image: projectImage12,
  },
  {
    title: "Professional Services",
    category: "DPO Portfolio",
    image: projectImage11,
  },

  {
    title: "Bernardo Silva",
    category: "Sports Graphics",
    image: projectImage8,
  },
  { title: "Phil Foden", category: "Sports Prototype", image: projectImage19 },

  {
    title: "Back to School",
    category: "Academic Notice",
    image: projectImage6,
  },
  {
    title: "Rashford Marcus",
    category: "Sport Prototype",
    image: projectImage14,
  },
  {
    title: "Intra-Faculty Debate",
    category: "NUESA Week",
    image: projectImage18,
  },

  // --- PERSONAL & SOCIAL ---
  {
    title: "Bernice Birthday",
    category: "Notebook Cover",
    image: projectImage2,
  },
  {
    title: "Mrs. Blessing",
    category: "Birthday Series",
    image: projectImage15,
  },
  {
    title: "Want a free Design",
    category: "Professional Services",
    image: projectImage13,
  },
  {
    title: "Brand New Week",
    category: "Start with a Smile",
    image: projectImage20,
  },
  { title: "Happy New Month", category: "Social Media", image: projectImage17 },
  { title: "Celebration Series", category: "Book Cover", image: projectImage3 },
];

// Brand Palette
const INDIGO = "#6366F1";
const GOLD = "#FACC15";
const SLATE = "#0F172A";

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const keyRight = () => {
    window.addEventListener("keypress", handleNext);
  };

  return (
    <Box
      component="section"
      id="portfolio-slider"
      sx={{ bgcolor: SLATE, overflow: "hidden" }}
    >
      {/* Header Section */}
      <Container sx={{ textAlign: "center", pt: 10, pb: 5 }}>
        <Typography
          variant="overline"
          sx={{
            color: INDIGO,
            fontWeight: 900,
            letterSpacing: 4,
            display: "block",
          }}
        >
          Curated Works
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: "white",
            mt: 1,
            letterSpacing: "-1px",
          }}
        >
          Featured{" "}
          <Box component="span" sx={{ color: GOLD }}>
            Masterpieces
          </Box>
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 4,
            bgcolor: GOLD,
            borderRadius: 2,
            mx: "auto",
            mt: 3,
          }}
        />
      </Container>

      {/* Main Carousel Wrapper */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          width: "100%",
          bgcolor: SLATE,
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(to bottom, ${alpha(
                SLATE,
                0.2,
              )}, ${alpha(SLATE, 0.7)}), url(${projects[index].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setOpen(true)}
          >
            <Container maxWidth="sm">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    p: { xs: 4, md: 6 },
                    textAlign: "center",
                    bgcolor: alpha("#FFF", 0.05),
                    backdropFilter: "blur(15px)",
                    borderRadius: "40px",
                    border: `1px solid ${alpha("#FFF", 0.2)}`,
                    color: "white",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: GOLD,
                      fontWeight: 800,
                      letterSpacing: 2,
                      mb: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {projects[index].category}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900,
                      mb: 2,
                      fontSize: { xs: "2rem", md: "3rem" },
                    }}
                  >
                    {projects[index].title}
                  </Typography>
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 3,
                      py: 1,
                      border: `1px solid ${alpha("#FFF", 0.4)}`,
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                    }}
                  >
                    Click to expand design
                  </Box>
                </Box>
              </motion.div>
            </Container>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          sx={{
            position: "absolute",
            left: 20,
            top: "50%",
            color: alpha(GOLD, 1),
            bgcolor: alpha(SLATE, 0.3),
            "&:hover": { bgcolor: INDIGO, color: "white" },
          }}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          sx={{
            position: "absolute",
            right: 20,
            top: "50%",
            color: GOLD,
            bgcolor: alpha(SLATE, 0.3),
            "&:hover": { bgcolor: INDIGO, color: "white" },
          }}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>

        {/* Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          {projects.map((_, i) => (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: i === index ? 30 : 10,
                height: 10,
                borderRadius: 5,
                bgcolor: i === index ? GOLD : alpha("#FFF", 0.5),
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Fullscreen Lightbox */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        onKeyDown={keyRight}
        maxWidth="lg"
        TransitionComponent={Fade}
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "visible",
          },
        }}
        slotProps={{
          backdrop: {
            sx: { bgcolor: alpha(SLATE, 0.98), backdropFilter: "blur(10px)" },
          },
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: { xs: 0, md: -60 },
            top: { xs: -60, md: 0 },
            color: "white",
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: "2.5rem" }} />
        </IconButton>
        <Box
          component="img"
          src={projects[index].image}
          sx={{
            width: "100%",
            maxHeight: "85vh",
            borderRadius: "24px",
            boxShadow: 24,
            border: `4px solid ${alpha("#FFF", 0.1)}`,
          }}
        />
      </Dialog>
    </Box>
  );
};

export default HeroSlider;

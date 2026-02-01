import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  TextField,
  Button,
  Grid2,
  Paper,
  CircularProgress,
  alpha,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import emailjs from "@emailjs/browser";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

// Brand Colors
const INDIGO = "#6366F1";
const GOLD = "#FACC15";
const SLATE = "#0F172A";

const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_sm5gz9b",
        "template_e8trn8m",
        form.current,
        "qqhBqcfls65JxkJxt",
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitted(true);
          form.current.reset(); // Clear form after success
          setTimeout(() => setSubmitted(false), 7000);
        },
        (error) => {
          setIsSubmitting(false);
          alert("Failed to send message. Please check your connection.");
          console.error("EmailJS Error:", error.text);
        },
      );
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 10, md: 12 }, // Increased padding for better breathing room
        backgroundColor: SLATE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Blur Background */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "400px",
          height: "400px",
          bgcolor: alpha(INDIGO, 0.15),
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: 0,
          pointerEvents: "none", // Prevent interaction with the blur
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid2 container spacing={8} alignItems="center">
          {/* Left Side: Text Info */}
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              <Typography
                variant="overline"
                sx={{
                  color: INDIGO,
                  fontWeight: 900,
                  letterSpacing: 3,
                  display: "block",
                }}
              >
                LET'S TALK
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.8rem", md: "3.8rem" },
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                Level Up Your{" "}
                <Box component="span" sx={{ color: INDIGO }}>
                  Creative
                </Box>{" "}
                Career.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: alpha("#fff", 0.7),
                  fontSize: "1.15rem",
                  lineHeight: 1.8,
                }}
              >
                Whether you’re looking to master high-impact sports design,
                professional church branding, or the logic of complete visual
                identities, I’m here to guide your creative journey.
              </Typography>

              <Box sx={{ pt: 4 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 800,
                    color: alpha("#fff", 0.5),
                    mb: 1,
                    letterSpacing: 1,
                  }}
                >
                  BASED IN
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: 700 }}
                >
                  Nigeria 🇳🇬{" "}
                  <Box component="span" sx={{ color: INDIGO, mx: 1 }}>
                    —
                  </Box>{" "}
                  Worldwide 🌎
                </Typography>
              </Box>
            </Stack>
          </Grid2>

          {/* Right Side: Form */}
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: "40px",
                backgroundColor: "#1A2239",
                border: `1px solid ${alpha("#fff", 0.05)}`,
              }}
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <form ref={form} onSubmit={sendEmail}>
                      <Grid2 container spacing={3}>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            name="name"
                            label="Full Name"
                            required
                            sx={textFieldStyles}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            name="email"
                            label="Email Address"
                            type="email"
                            required
                            sx={textFieldStyles}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            name="title"
                            label="Project Type (e.g. Branding, Flyer)"
                            sx={textFieldStyles}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                          <TextField
                            fullWidth
                            name="message"
                            label="Tell me about your vision"
                            multiline
                            rows={4}
                            required
                            sx={textFieldStyles}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                          <Button
                            fullWidth
                            type="submit"
                            disabled={isSubmitting}
                            variant="contained"
                            size="large"
                            endIcon={!isSubmitting && <SendRoundedIcon />}
                            sx={{
                              bgcolor: INDIGO,
                              color: "white",
                              borderRadius: "16px",
                              py: 2.5,
                              fontWeight: 800,
                              fontSize: "1.1rem",
                              textTransform: "none",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                bgcolor: INDIGO,
                                transform: "translateY(-3px)",
                                boxShadow: `0 12px 24px ${alpha(INDIGO, 0.4)}`,
                              },
                              "&.Mui-disabled": {
                                bgcolor: alpha("#fff", 0.1),
                                color: alpha("#fff", 0.3),
                              },
                            }}
                          >
                            {isSubmitting ? (
                              <CircularProgress size={24} color="inherit" />
                            ) : (
                              "Start a Project"
                            )}
                          </Button>
                        </Grid2>
                      </Grid2>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "40px 0" }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{ fontSize: "5rem", color: GOLD, mb: 2 }}
                    />
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 900, mb: 2, color: "white" }}
                    >
                      Message Received!
                    </Typography>
                    <Typography
                      sx={{
                        color: alpha("#fff", 0.7),
                        fontSize: "1.1rem",
                        lineHeight: 1.6,
                      }}
                    >
                      Thanks, David here! I'll review your project details and
                      get back to you within 24 hours.
                    </Typography>
                  </motion.div>
                )}
              </AnimatePresence>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    fontSize: "1.1rem",
    color: "white",
    transition: "background-color 0.2s",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.15)",
    },
    "&.Mui-focused fieldset": {
      borderColor: GOLD,
      borderWidth: "2px", // Slightly thicker for visibility
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: 500,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: GOLD,
  },
};

export default ContactSection;

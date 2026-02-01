import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import BehanceIcon from "@mui/icons-material/Brush"; // Using Brush for Behance if icon not installed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <InstagramIcon />, url: "#", label: "Instagram" },
    { icon: <TwitterIcon />, url: "#", label: "Twitter" },
    { icon: <BehanceIcon />, url: "#", label: "Behance" },
    { icon: <LinkedInIcon />, url: "#", label: "LinkedIn" },
  ];

  const INDIGO = "#6366F1";
  const GOLD = "#FACC15";
  const SLATE = "#0F172A";

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0F172A",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          sx={{ mb: 6 }}
        >
          {/* Logo/Branding Side */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h6"
              sx={{
                pl: 1,
                fontWeight: 900,
                color: "white",
              }}
            >
              DPO GRAPHICS
              <Box component="span" sx={{ color: GOLD }}>
                .
              </Box>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#94a3b8", maxWidth: "300px" }}
            >
              Transforming visions into masterpieces through elite graphic
              design and branding.
            </Typography>
          </Box>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.url}
                target="_blank"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255,255,255,0.05)",
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: GOLD,
                    transform: "translateY(-5px)",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 4 }} />

        {/* Bottom Section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="caption" sx={{ color: "#64748b" }}>
            © {currentYear} DPO Graphics. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link
              href="#work"
              underline="none"
              sx={{
                color: "#64748b",
                fontSize: "0.75rem",
                "&:hover": { color: GOLD },
              }}
            >
              Work
            </Link>
            <Link
              href="#contact"
              underline="none"
              sx={{
                color: "#64748b",
                fontSize: "0.75rem",
                "&:hover": { color: GOLD },
              }}
            >
              Contact
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "#64748b",
                fontSize: "0.75rem",
                "&:hover": { color: GOLD },
              }}
            >
              Privacy Policy
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

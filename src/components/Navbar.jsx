import React from "react";
import {
  Box,
  IconButton,
  Button,
  Drawer,
  Stack,
  Typography,
  Link,
  useScrollTrigger,
  alpha,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Brand Colors
const INDIGO = "#6366F1";
const GOLD = "#FACC15";
const SLATE = "#0F172A";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const navItems = ["Home", "Services", "About", "Works", "Resume", "Contact"];

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: trigger ? 16 : 28,
        width: "100%",
        zIndex: 20,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Box
        sx={{
          pointerEvents: "auto",
          width: trigger ? "65%" : "75%",
          maxWidth: "1100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2.5, md: 4 },
          py: trigger ? 1 : 0.6,
          borderRadius: "100px",

          // Glassmorphism logic
          bgcolor: trigger ? alpha(SLATE, 0.85) : SLATE,
          backdropFilter: trigger ? "blur(12px)" : "none",
          border: "1px solid",
          borderColor: alpha("#FFF", 0.1),
          boxShadow: trigger
            ? `0 20px 40px ${alpha("#000", 0.3)}`
            : `0 10px 30px ${alpha(SLATE, 0.2)}`,

          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 900,
            color: "white",
            letterSpacing: "-1px",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          DPO
          <Box component="span" sx={{ color: GOLD }}>
            .
          </Box>
        </Typography>

        {/* Desktop Navigation */}
        <Stack
          direction="row"
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              underline="none"
              sx={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: alpha("#FFF", 0.7),
                textTransform: "uppercase",
                letterSpacing: "2px",
                position: "relative",
                transition: "color 0.3s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: -4,
                  left: "50%",
                  transform: "translateX(-50%)",
                  bgcolor: GOLD,
                  transition: "width 0.3s ease",
                },
                "&:hover": { color: "white" },
                "&:hover::after": { width: "100%" },
              }}
            >
              {item}
            </Link>
          ))}
        </Stack>

        {/* Action Button */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            variant="outlined"
            href="https://wa.me/message/CEQZHLZAUM5LB1"
            target="_blank"
            sx={{
              display: { xs: "none", md: "inline-flex" },
              borderColor: alpha("#FFF", 0.2),
              color: "white",
              "&:hover": {
                borderColor: GOLD,
                bgcolor: alpha(GOLD, 0.05),
              },
              px: 5,
              py: 1.5,
              borderRadius: "50px",
              textTransform: "none",
              fontWeight: 900,
            }}
            startIcon={<WhatsAppIcon />}
          >
            Contact Me
          </Button>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "white",
              bgcolor: alpha("#FFF", 0.1),
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Stack>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "100%",
              maxWidth: "300px",
              bgcolor: SLATE,
              color: "white",
              p: 4,
            },
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 8 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
            <CloseRoundedIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Box>

        <Stack spacing={4}>
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              underline="none"
              sx={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "white",
                "&:active": { color: GOLD },
              }}
            >
              {item}
            </Link>
          ))}

          <Box sx={{ pt: 4 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: INDIGO,
                py: 2,
                borderRadius: "15px",
                fontWeight: 900,
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Navbar;

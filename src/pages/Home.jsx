import { Box } from "@mui/material";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/Services";
import AboutSection from "../components/About";
import ProjectsSection from "../components/Project";

import EducationSection from "../components/Academic";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import TestimonialSection from "../components/Testimonial";
import ContactSection from "../components/Contact";
import ScrollToTop from "../components/ScrollTop";

// import { projects } from "../data/projects";

const Portfolio = () => {
  return (
    <Box margin={0} p={0}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <HeroSlider />
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default Portfolio;

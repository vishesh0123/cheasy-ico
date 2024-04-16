import Header from "@/components/Header";
import Particle from "@/components/Particles";
import Box from '@mui/material/Box';
import InfoSection from "@/components/InfoSection";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Launch from "@/components/Launch";

export default function Home() {
  return (
    <>
      <Box>
        <Particle />
        <Header />
        {/* <LogoBg /> */}

        <Launch />
        <InfoSection />
        <Roadmap />
        <Tokenomics />
        {/* <FeaturedIn />
        <Team /> */}
        <Faq />
        <Footer />
      </Box>
    </>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Particle from "@/components/Particles";
import Box from '@mui/material/Box';
import IcoLaunch from "@/components/IcoLaunch";
import LogoBg from "@/components/LogoBg";
import InfoSection from "@/components/InfoSection";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import FeaturedIn from "@/components/FeaturedIn";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import ICOPhases from "@/components/ICOPhases";
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

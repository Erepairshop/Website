import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leistungen from "@/components/Leistungen";
import TechStack from "@/components/TechStack";
import Projekte from "@/components/Projekte";
import Ablauf from "@/components/Ablauf";
import Testimonials from "@/components/Testimonials";
import Preise from "@/components/Preise";
import FAQ from "@/components/FAQ";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticlesBackground from "@/components/ParticlesBackground";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leistungen />
        <TechStack />
        <Projekte />
        <Ablauf />
        <Testimonials />
        <Preise />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

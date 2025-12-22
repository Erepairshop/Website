import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leistungen from "@/components/Leistungen";
import Projekte from "@/components/Projekte";
import Ablauf from "@/components/Ablauf";
import Preise from "@/components/Preise";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leistungen />
        <Projekte />
        <Ablauf />
        <Preise />
        <Kontakt />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

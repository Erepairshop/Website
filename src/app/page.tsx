import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leistungen from "@/components/Leistungen";
import Projekte from "@/components/Projekte";
import Ablauf from "@/components/Ablauf";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

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
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}

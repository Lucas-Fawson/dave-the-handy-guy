import Header from "@/components/Header";
import MobileBottomBar from "@/components/MobileBottomBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Video from "@/components/Video";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Video />
        <Services />
        <About />
        <Reviews />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}

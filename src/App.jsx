import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoomsSection from "./components/RoomsSection";
import VibeSection from "./components/VibeSection";
import PhotoGallery from "./components/PhotoGallery";
import AboutSection from "./components/AboutSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import StickyMobileCta from "./components/StickyMobileCta";

export default function App() {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <RoomsSection />
        <VibeSection />
        <PhotoGallery />
        <AboutSection />
        <LocationSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}

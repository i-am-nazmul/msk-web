import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import BusinessPrinciples from '@/components/BusinessPrinciples';
import PhilosophyCarousel from '@/components/PhilosophyCarousel';
import DigitalServices from '@/components/DigitalServices';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <BusinessPrinciples />
        <PhilosophyCarousel />
        <DigitalServices />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}

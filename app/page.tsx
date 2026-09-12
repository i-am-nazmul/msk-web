import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Hero2 />
      </main>
      <Footer />
    </>
  );
}

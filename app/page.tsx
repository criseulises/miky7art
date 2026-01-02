import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

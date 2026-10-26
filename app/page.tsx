import Behaviour from '@/components/Behaviour';
import DemoDialog from '@/components/DemoDialog';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import How from '@/components/How';
import Products from '@/components/Products';
import Promises from '@/components/Promises';
import Talk from '@/components/Talk';
import What from '@/components/What';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <What />
        <How />
        <Products />
        <Promises />
        <Talk />
      </main>
      <Footer />
      <DemoDialog />
      <Behaviour />
    </>
  );
}

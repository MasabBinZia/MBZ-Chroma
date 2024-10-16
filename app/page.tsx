import Footer from '@/components/Footer';
import { Hero } from '@/components/Hero';
import Resources from '@/components/Resources';

export default function Home() {
  return (
    <main className="absolute h-screen w-full px-4">
      <Hero />
      <Resources />
      <Footer />
    </main>
  );
}

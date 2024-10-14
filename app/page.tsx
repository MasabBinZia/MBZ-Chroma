import { Hero } from "@/components/Hero";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <main className="absolute h-screen w-full">
      <Hero />
      <Resources />
    </main>
  );
}

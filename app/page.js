import Hero from "@/components/sections/Hero";
import { home } from "@/data/home";

export default function Home() {
  return (
    <div>
      <Hero data={home.hero} />
    </div>
  );
}

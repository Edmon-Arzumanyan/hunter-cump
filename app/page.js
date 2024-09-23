import ImageWithDesc from "@/components/content/ImageWithDesc";
import Container from "@/components/sections/Container";
import Hero from "@/components/sections/Hero";
import { home } from "@/data/home";

export default function Home() {
  return (
    <div>
      <Hero data={home.hero} />
      <hr className="h-1 w-full bg-white" />
      <Container
        bg="bg-camouflage bg-center bg-cover bg-no-repeat"
        data={
          <>
            {home.sections.map((elem, index) => (
              <ImageWithDesc data={elem} key={index} position={elem.position} />
            ))}
          </>
        }
      />
      <hr className="h-1 w-full bg-white" />
    </div>
  );
}

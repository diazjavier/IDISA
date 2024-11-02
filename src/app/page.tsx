import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Cta } from "@/components/Cta";

import { quienesSomos, actividades } from "@/components/data";
import SimpleSectionCenter from "@/components/SimpleSectionCenter";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SimpleSectionCenter data={quienesSomos}/>
      <Benefits data={actividades} />
      <Cta/>
    </Container>
  );
}

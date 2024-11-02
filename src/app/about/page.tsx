import { Container } from "@/components/Container";
import PerfilCard from "@/components/PerfilCard";
import { quienesSomos2 , about } from "@/components/data";
import SimpleSectionCenter from "@/components/SimpleSectionCenter"; 
import { Cta } from "@/components/Cta";

export default function About() {
  return (
    <Container>
      <div id="team" className="section relative pb-8">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <SimpleSectionCenter data={quienesSomos2}/>
          <div className="flex flex-wrap flex-row -mx-4 justify-center">
            {about.data.map((item, index) => (
              <PerfilCard key={index} data={item} />
            ))}
          </div>{" "}
        </div>
      </div>{" "}
      <Cta/>
    </Container>
  );
}

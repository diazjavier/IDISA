import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import SimpleSectionCenter from "@/components/SimpleSectionCenter";
import { proyectosHeader, proyectos } from "@/components/data";
import SimpleCard from "@/components/SimpleCard";

export default function Projects() {
  return (
    <Container>
      <div id="serivices" className="section relative pb-8">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <SimpleSectionCenter data={proyectosHeader} />
          <div className="flex flex-wrap flex-row -mx-4 justify-between">
              {proyectos.data.map((card, index) => (
                <SimpleCard key={index} data={card} />
              ))}
          </div>{" "}
        </div>
      </div>{" "}
      <Cta />
    </Container>
  )
}

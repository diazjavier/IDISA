import ImageCards from "@/components/ImageCards";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import SimpleSectionCenter from "@/components/SimpleSectionCenter";
import { areasHeader, areas } from "@/components/data";

export default function Services() {
  return (
    <Container>
      <div id="serivices" className="section relative pb-8">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <SimpleSectionCenter data={areasHeader} />
          <div className="flex flex-wrap flex-row -mx-4 justify-between">
              {areas.data.map((card, index) => (
                <ImageCards key={index} data={card} />
              ))}
          </div>{" "}
        </div>
      </div>{" "}
      <Cta />
    </Container>
  );
}

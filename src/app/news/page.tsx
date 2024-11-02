import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import SimpleSectionCenter from "@/components/SimpleSectionCenter";
import NewsCard from "@/components/NewsCard";
import { noticiasHeader } from "@/components/data";
import { noticias } from "@/components/data";



export default function News() {
  return (
    <Container>
      <div id="serivices" className="section relative pb-8">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <SimpleSectionCenter data={noticiasHeader} />
          <div className="flex flex-wrap flex-row">
              {noticias.data.map((card, index) => (
                <NewsCard key={index} data={card} />
              ))}
          </div>{" "}
        </div>
      </div>{" "}
      <Cta />
    </Container>
  )
}

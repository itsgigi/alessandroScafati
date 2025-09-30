import Experiences from "../components/Curriculum/Experiences";
import Block from "../components/constants/Block";
import MultiTimeline from "../components/Curriculum/MultiTimeline";
import type { TimelineEntry } from "../components/Curriculum/Timeline";
import Heading from "../components/constants/ui/Heading";

const CurriculumPage = () => {
    return (
      <div className="min-h-screen pt-10 md:pt-15 bg-black text-gold font-lato">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Heading title="Curriculum" />
          <Block>
            <Experiences />
          </Block>
          <MultiTimeline
            teatro={[
              { year: 2025, title: "Spettacolo Teatro A", role: "Protagonista" },
              { year: 2024, title: "Spettacolo Teatro B", role: "Ruolo" },
            ] as TimelineEntry[]}
            cinema={[
              { year: 2025, title: "Film A", role: "Co-protagonista", extra: "Regia XYZ" },
              { year: 2023, title: "Film B", role: "Cameo" },
            ] as TimelineEntry[]}
            tv={[
              { year: 2024, title: "Serie TV A", role: "Ospite" },
              { year: 2022, title: "Serie TV B", role: "Ricorrente" },
            ] as TimelineEntry[]}
            pubblicita={[
              { year: 2025, title: "Brand A", role: "Protagonista" },
              { year: 2024, title: "Brand B", role: "Figurazione speciale" },
            ] as TimelineEntry[]}
          />
        </div>
      </div>
    );
  };
  
  export default CurriculumPage;


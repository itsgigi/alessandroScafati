import { useEffect, useState } from "react";
import GlobalApi from "../../utils/GlobalApi";
import type { Experience } from "../../utils/types";
import Timeline from "./Timeline";

const MultiTimeline = () => {
  const [experiences, setExperiences] = useState<Experience | null>(null);

  useEffect(() => {
    GlobalApi.getExperiences().then((data) => {
      setExperiences(data.experiences[0]);
    });
  }, []);

  if (!experiences) {
    return (
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center py-20">
          <p className="text-gold">Caricamento esperienze...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="relative">
        <div className="md:pt-20 pt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <Timeline title="Teatro" entries={experiences.teather} />
          </div>
          <div>
            <Timeline title="Cinema" entries={experiences.cinema} />
          </div>
          <div>
            <Timeline title="Televisione" entries={experiences.television} />
          </div>
          <div>
            <Timeline title="Pubblicità" entries={experiences.advertise} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiTimeline;


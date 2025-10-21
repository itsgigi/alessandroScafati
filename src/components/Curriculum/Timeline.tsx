import type { Experience, ExperienceEntry } from "../../utils/types";
import Heading from "../constants/ui/Heading";

type TimelineProps = {
  title: string;
  entries: Experience['teather'] | Experience['cinema'] | Experience['television'] | Experience['advertise'];
};

const Timeline = ({ title, entries }: TimelineProps) => {
  const grouped = Array.isArray(entries) ? entries.reduce<Record<number, ExperienceEntry[]>>((acc, e) => {
    if (!acc[e.year]) acc[e.year] = [];
    acc[e.year].push(e);
    return acc;
  }, {}) : {};

  return (
    <div className="w-full text-center">
      <Heading title={title} />
      <div className="relative border-l border-white/30">
        {Object.keys(grouped).length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gold/70">Nessuna esperienza disponibile</p>
          </div>
        ) : (
          Object.keys(grouped)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => (
            <div key={year} className="mb-6">
              <div className="text-lg font-semibold mb-2 ml-4">{year}</div>
              <ul className="space-y-2">
                {grouped[Number(year)]?.map((item, idx) => (
                  <li key={`${year}-${idx}`} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-white"></span>
                    <div className="w-full text-center">
                      <div className="font-medium">{item.description}</div>
                      <div className="text-sm opacity-80">
                        {item.role}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;


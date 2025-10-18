import type { Experience, ExperienceEntry } from "../../utils/types";

type TimelineProps = {
  title: string;
  entries: Experience['teather'] | Experience['cinema'] | Experience['television'] | Experience['advertise'];
};

const Timeline = ({ title, entries }: TimelineProps) => {
  const grouped = entries?.reduce<Record<number, ExperienceEntry[]>>((acc, e) => {
    if (!acc[e.year]) acc[e.year] = [];
    acc[e.year].push(e);
    return acc;
  }, {}) || {};

  return (
    <div className="w-full text-center">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="relative border-l border-gold/30">
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
                {grouped[Number(year)].map((item, idx) => (
                  <li key={`${year}-${idx}`} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-gold/70"></span>
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


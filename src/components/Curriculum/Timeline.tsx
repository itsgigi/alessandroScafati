import type { Experience, ExperienceEntry } from "../../utils/types";
import Heading from "../constants/ui/Heading";

type TimelineProps = {
  title: string;
  entries: Experience['teather'] | Experience['cinema'] | Experience['television'] | Experience['advertise'];
};

const Timeline = ({ title, entries }: TimelineProps) => {
  const grouped = Array.isArray(entries)
    ? entries.reduce<Map<string, { label: string; startYear: number; endYear: number | null; items: ExperienceEntry[] }>>((acc, entry) => {
        const startYear = Number(entry.year);
        const rawEndYear = entry.endYear ? Number(entry.endYear) : null;
        const endYear = Number.isNaN(rawEndYear) ? null : rawEndYear;
        const key = `${startYear}-${endYear ?? ""}`;

        if (!acc.has(key)) {
          const label = endYear && endYear !== startYear ? `${startYear} - ${endYear}` : `${startYear}`;
          acc.set(key, {
            label,
            startYear,
            endYear,
            items: [],
          });
        }

        acc.get(key)?.items.push(entry);
        return acc;
      }, new Map())
    : new Map();

  const sortedGroups = Array.from(grouped.values()).sort((a, b) => {
    if (a.startYear === b.startYear) {
      const endA = a.endYear ?? a.startYear;
      const endB = b.endYear ?? b.startYear;
      return endB - endA;
    }
    return b.startYear - a.startYear;
  });

  return (
    <div className="w-full text-center">
      <Heading title={title} />
      <div className="relative border-l border-white/30">
        {sortedGroups.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gold/70">Nessuna esperienza disponibile</p>
          </div>
        ) : (
          sortedGroups.map((group) => (
            <div key={`${group.startYear}-${group.endYear ?? ""}`} className="mb-6">
              <div className="text-lg font-semibold mb-2 ml-4">
                {group.label}
              </div>
              <ul className="space-y-2">
                {group.items.map((item, idx) => (
                  <li key={`${group.startYear}-${group.endYear ?? ""}-${idx}`} className="flex items-start gap-3">
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


export type TimelineEntry = {
  year: number;
  title: string;
  role?: string;
  extra?: string;
};

type TimelineProps = {
  title: string;
  entries: TimelineEntry[];
};

const Timeline = ({ title, entries }: TimelineProps) => {
  const grouped = entries.reduce<Record<number, TimelineEntry[]>>((acc, e) => {
    if (!acc[e.year]) acc[e.year] = [];
    acc[e.year].push(e);
    return acc;
  }, {});
  const years = Object.keys(grouped).map(Number).sort((a, b) => b - a);

  return (
    <div className="w-full text-center">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="relative border-l border-gold/30">
        {years.map((year) => (
          <div key={year} className="mb-6">
            <div className="text-lg font-semibold mb-2 ml-4">{year}</div>
            <ul className="space-y-2">
              {grouped[year].map((item, idx) => (
                <li key={`${year}-${idx}`} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gold/70"></span>
                  <div className="w-full text-center">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm opacity-80">
                      {item.role}
                      {item.role && item.extra ? " • " : null}
                      {item.extra}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;


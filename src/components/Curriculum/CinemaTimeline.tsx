type TimelineItem = {
  year: number;
  title: string;
  role?: string;
  director?: string;
};

const cinemaData: TimelineItem[] = [
  { year: 2025, title: "Titolo Film A", role: "Protagonista", director: "Regista A" },
  { year: 2024, title: "Titolo Film B", role: "Co-protagonista", director: "Regista B" },
  { year: 2023, title: "Titolo Film C", role: "Cameo", director: "Regista C" },
  { year: 2022, title: "Titolo Film D", role: "Ruolo secondario", director: "Regista D" },
];

const groupByYear = (items: TimelineItem[]) => {
  return items.reduce<Record<number, TimelineItem[]>>((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});
};

const CinemaTimeline = () => {
  const grouped = groupByYear(cinemaData);
  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold mb-4">Cinema</h2>
      <div className="relative pl-6 border-l border-gray-300">
        {years.map((year) => (
          <div key={year} className="mb-6">
            <div className="text-xl font-semibold mb-2">{year}</div>
            <ul className="space-y-2">
              {grouped[year].map((item, idx) => (
                <li key={`${year}-${idx}`} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-gray-500"></span>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm opacity-70">
                      {item.role ? `${item.role}` : null}
                      {item.role && item.director ? " • " : null}
                      {item.director ? `Regia: ${item.director}` : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CinemaTimeline;


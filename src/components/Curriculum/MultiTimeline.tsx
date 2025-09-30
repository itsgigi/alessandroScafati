import Timeline, { type TimelineEntry } from "./Timeline";

type MultiTimelineProps = {
  teatro: TimelineEntry[];
  cinema: TimelineEntry[];
  tv: TimelineEntry[];
  pubblicita: TimelineEntry[];
};

const MultiTimeline = ({ teatro, cinema, tv, pubblicita }: MultiTimelineProps) => {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="relative">
        <div className="md:pt-20 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Timeline title="Teatro" entries={teatro} />
          </div>
          <div>
            <Timeline title="Cinema" entries={cinema} />
          </div>
          <div>
            <Timeline title="TV" entries={tv} />
          </div>
          <div>
            <Timeline title="Pubblicità" entries={pubblicita} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiTimeline;


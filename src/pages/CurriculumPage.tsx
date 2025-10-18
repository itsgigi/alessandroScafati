import Experiences from "../components/Curriculum/Experiences";
import Block from "../components/constants/Block";
import MultiTimeline from "../components/Curriculum/MultiTimeline";
import Heading from "../components/constants/ui/Heading";
import Divider from "../components/constants/ui/Divider";

const CurriculumPage = () => {
    return (
      <div className="min-h-screen pt-10 md:pt-15 bg-black text-gold font-lato">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Heading title="Curriculum" />
          <Divider className="mb-4" />
          <Block>
            <Experiences />
          </Block>
          <MultiTimeline />
        </div>
      </div>
    );
  };
  
  export default CurriculumPage;


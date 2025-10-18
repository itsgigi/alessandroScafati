import GlobalApi from "../../utils/GlobalApi";
import Button from "../constants/ui/Button";
import Heading from "../constants/ui/Heading";
import { useState } from "react";
import type { Curriculum } from "../../utils/types";
import { useEffect } from "react";

const Experiences = () => {
    const [curriculum, setCurriculum] = useState<Curriculum | null>(null);

    useEffect(() => {
        GlobalApi.getCurriculum().then((data) => {
            setCurriculum(data.curricula[0]);
        });
    }, []);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV-ALESSANDRO-SCAFATI.pdf';
        link.download = 'CV-ALESSANDRO-SCAFATI.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-4 items-center">
            <Heading title="Le mie esperienze" />
            <p className="text-md font-lato font-light opacity-80 mb-4">
                {curriculum?.experience}
            </p>

            <b>PREMI</b>
            <div dangerouslySetInnerHTML={{ __html: curriculum?.prizes?.html ?? '' }} className="font-light mb-4" />
            
            <b>FORMAZIONE</b>
            <div dangerouslySetInnerHTML={{ __html: curriculum?.studies?.html ?? '' }} className="font-light mb-4" />
            <Button icon="download" onClick={handleDownloadCV}>Scarica Curriculum</Button>
        </section>
    );
  };
  
  export default Experiences;


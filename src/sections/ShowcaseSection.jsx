import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  const publications = [
    {
      title: "Enhancing Mental Health Care: Depression Detection using CNN and LSTM Model",
      journal: "IJARAI Journal, 2024",
      embed: "https://gamma.app/embed/bhhmzfefyqi2crn",
    },
    {
      title: "PAWnnect: Pioneering IoT-ML Driven Pet Monitoring",
      journal: "IEEE Student Research Symposium, 2024",
      embed: "https://gamma.app/embed/iv4dx5zmhx5yob6",
    },
    {
      title: "Decoding Mental Health: Leveraging Machine Learning for Social Media Analysis",
      journal: "ICMLA Conference Proceedings, 2023",
      embed: "https://gamma.app/embed/ciyslqe2va6d8zc",
    },
  ];

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Project Showcase */}
        <div className="showcaselayout flex flex-col lg:flex-row gap-10">
          <div
            ref={rydeRef}
            className="lg:w-2/3 transition-transform duration-300 hover:scale-[1.01]"
          >
            <a
              href="https://www.canva.com/design/DAGry-8Neog/rdnc9wfFl-oNFWXaBkS1kA/view?utm_content=DAGry-8Neog&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1f0daecad0"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="image-wrapper w-full">
                <img src="/images/sn.png" alt="Eventopia App" className="rounded-lg w-full" />
              </div>
              <div className="text-content mt-4">
                <h2 className="text-2xl font-bold">Mobile App Developer - SharkNinja</h2>
                <p className="text-gray-600 md:text-lg mt-2">
                  Developed and enhanced the SharkClean mobile app, integrating Bluetooth-based robot controls and advanced React Native features for seamless smart home experiences.
Collaborated with cross-functional teams to deliver high-impact IoT functionalities, elevating product performance and user satisfaction.
                </p>
              </div>
            </a>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-6">
            <a
              href="https://www.canva.com/design/DAGmmZtdThY/CNLtPdvH4caEQz0_oUGOfg/view?utm_content=DAGmmZtdThY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb376c8aa87"
              target="_blank"
              rel="noopener noreferrer"
              ref={libraryRef}
              className="block transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="bg-[#FFEFDB] rounded-lg overflow-hidden">
                <img src="/images/huskytracks.png" alt="HuskyTracks App" className="w-full" />
              </div>
              <h2 className="mt-2 text-lg font-semibold">HuskyTracks – Smart Lost & Found</h2>
            </a>

            <a
              href="https://www.canva.com/design/DAGry4qcln4/JxkKZ0ieyyOIRD6bDsLIZg/view?utm_content=DAGry4qcln4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hacf2252e3e"
              target="_blank"
              rel="noopener noreferrer"
              ref={ycDirectoryRef}
              className="block transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="bg-[#FFE7EB] rounded-lg overflow-hidden">
                <img src="/images/tcssbi.png" alt="Tata Consultancy Services" className="w-full" />
              </div>
              <h2 className="mt-2 text-lg font-semibold">Flutter Developer at Tata Consultancy Services</h2>
            </a>
            <a
              href="https://www.canva.com/design/DAGdt0sSt6A/2Wzzmsjue6NgOSnV8oLhBw/view?utm_content=DAGdt0sSt6A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hec78965082"
              target="_blank"
              rel="noopener noreferrer"
              ref={ycDirectoryRef}
              className="block transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="bg-[#FFE7EB] rounded-lg overflow-hidden">
                <img src="/images/eventopia.png" alt="Eventopia App" className="w-full" />
              </div>
              <h2 className="mt-2 text-lg font-semibold">Eventopia – Event Management App</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;

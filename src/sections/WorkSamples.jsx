import { Link } from "react-router-dom";
import { workSamples } from "../constants";

const WorkSamples = () => {
  return (
    <section className="bg-black text-white px-6 py-10 max-w-7xl mx-auto min-h-screen">
      {/* Go Back Button (Styled CTA) */}
      <div className="flex justify-start mb-8">
        <Link to="/">
  <button className="bg-[#d9ecff] text-black px-6 py-3 rounded-lg hover:bg-[#b3d4f3] transition-colors duration-300 font-semibold text-sm uppercase tracking-wide">
    ← Go to Portfolio
  </button>
</Link>




      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-12 text-center">📁 My Work Samples</h1>

      {/* Responsive Grid for All Work Samples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {workSamples.map((sample, index) => (
          <div
            key={index}
            className="rounded-xl border border-black-50 p-5 shadow-md bg-black-100 transition hover:shadow-xl"
          >
            <div className="aspect-video w-full rounded-md overflow-hidden mb-4">
              <iframe
                src={sample.ppt}
                title={sample.title}
                className="w-full h-full border rounded-md"
                loading="lazy"
                allow="fullscreen"
              ></iframe>
            </div>
            <h2 className="text-xl font-semibold mb-2">{sample.title}</h2>
            <p className="text-sm text-white-50 mb-2">{sample.desc}</p>
            <a
              href={sample.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline text-sm hover:text-blue-300"
            >
              GitHub Repo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSamples;

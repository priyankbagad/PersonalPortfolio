import { useEffect, useRef } from "react";
import gsap from "gsap";

const memoriesList = [
  { imgPath: "/images/vit.jpg", alt: "Memory 1" },
  { imgPath: "/images/vit.jpg", alt: "Memory 2" },
  { imgPath: "/images/vit.jpg", alt: "Memory 3" },
  { imgPath: "/images/vit.jpg", alt: "Memory 4" },
  { imgPath: "/images/vit.jpg", alt: "Memory 5" },
  // Add more memories here
];

const MemoryCard = ({ memory }) => (
  <div className="flex-none flex-center snap-center">
    <img
      src={memory.imgPath}
      alt={memory.alt}
      className="rounded-lg w-72 h-48 md:w-96 md:h-64 object-cover mx-2"
    />
  </div>
);

const MyMemories = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const box = marqueeRef.current;

      gsap.to(box, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black text-white px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">My Memories</h2>

      <div className="overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex space-x-5 w-max"
          style={{ willChange: "transform" }}
        >
          {memoriesList.concat(memoriesList).map((memory, index) => (
            <MemoryCard key={index} memory={memory} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyMemories;

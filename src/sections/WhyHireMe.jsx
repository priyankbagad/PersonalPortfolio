import { Link } from "react-router-dom";
import MyJourney from "../sections/MyJourney";

const WhyHireMe = () => {
  return (
    <section className="bg-black text-white px-6 py-10 max-w-7xl mx-auto min-h-screen">
      {/* Why Hire Me Elevator Pitch */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10 mt-10">
        {/* Pitch Text */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-6 mt-10">🎯 Why Hire Me?</h1>
          <p className="text-white-50 md:text-xl mb-6">
            I’m a versatile developer with strong technical expertise, building everything from ML-powered systems to React Native mobile apps. I bring an eye for usability and a drive to ship value. I don’t just code – I care deeply about how things work, how users feel, and how businesses grow. If you want someone who owns problems, delivers polished solutions, and grows with your team, I’m that person.
          </p>

          {/* Buttons Below Text */}
          <div className="flex flex-col md:flex-row justify-start items-center gap-4 mt-6">
            <Link to="/">
              <button className="bg-[#d9ecff] text-black px-6 py-3 rounded-lg hover:bg-[#b3d4f3] transition-colors duration-300 font-semibold text-sm uppercase tracking-wide">
                ← Go to Portfolio
              </button>
            </Link>

            <Link to="/work-samples">
              <button className="bg-[#d9ecff] text-black px-6 py-3 rounded-lg hover:bg-[#b3d4f3] transition-colors duration-300 font-semibold text-sm uppercase tracking-wide">
                View My Work Samples
              </button>
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/3 w-full flex justify-center mt-10 md:mt-0">
          <img
            src="/images/git.png" // Replace with your actual photo path
            alt="Priyank Bagad"
            className="rounded-lg w-60 md:w-full max-w-xs object-cover"
          />
        </div>
      </div>

      {/* My Journey Section */}
      <MyJourney />
    </section>
  );
};

export default WhyHireMe;

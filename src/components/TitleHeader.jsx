const TitleHeader = ({ title, sub, center = false }) => {
  return (
    <div className={`flex flex-col ${center ? "items-center" : "items-start"} gap-5`}>
      <div className="hero-badge">
        <p className={`${center ? "text-center" : ""}`}>{sub}</p>
      </div>
      <div>
        <h1 className={`font-semibold md:text-5xl text-3xl ${center ? "text-center" : ""}`}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;

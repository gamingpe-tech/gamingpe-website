import { sectionData } from "@/mockData/sectionData";
import HomeWMap from "@/assets/images/index/homeWmap.mp4";

const Hero = () => {
  const { title, title2, title3 } = sectionData.hero;

  return (
    <section className="Hero">
      {/* Main Content Layer */}
      <div className="content-container">
        <h3 className="global-gradient-text">{title}</h3>
        <h3>{title2}</h3>
        <h3>{title3}</h3>
        <p className="hero-description">
          Unlocking New Horizons For International Growth.
        </p>
        <div className="hero-description2">
          Keep transactions secure with advanced fraud detection.
        </div>
      </div>
      <div className="video-container">
        <video
          src={HomeWMap} // Replace with your video file path
          autoPlay
          // loop
          muted
          playsInline
          className="background-video"
        />
      </div>
    </section>
  );
};

export default Hero;

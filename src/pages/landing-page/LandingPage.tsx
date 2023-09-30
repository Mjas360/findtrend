import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

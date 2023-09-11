import {
  AppWrapperStyles,
  HeroStyles,
} from "../../../custom-style-components/landingPageStyles";
import Navbar from "./Navbar";
import bgSvg from "../../../assets/svgs/Ornament.svg";

export default function Hero() {
  return (
    <AppWrapperStyles $bgColor="black" $bgImg={bgSvg}>
      <HeroStyles>
        <Navbar />
      </HeroStyles>
    </AppWrapperStyles>
  );
}

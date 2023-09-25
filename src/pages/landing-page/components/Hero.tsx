import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FancyFloatingCardTextAndIcon } from "../../../constants";
import {
  AppWrapperStyles,
  FancyButton,
  FancyFloatingCard,
  FancyFloatingCardResponsiveWrapper,
  FancyFloatingCardWrapper,
  FlexWithCustomGapStyles,
  H1,
  HeroStyles,
  Paragraph,
  TextAndArrow,
} from "../../../custom-style-components/landingPageStyles";
import {
  getImage,
  headingTransition,
  headingVariants,
  hideCard,
} from "../../utils/utility";
import Navbar from "./Navbar";

export default function Hero() {
  const [hiddenCards, setHiddenCards] = useState<Array<number>>([]);

  return (
    <AppWrapperStyles
      $bgColor="black"
      $bgImg={getImage("ornament.svg", "svgs")}
    >
      <HeroStyles>
        <Navbar />
        <div style={{ margin: "clamp(40px, 4vw, 80px)  0" }}>
          <FlexWithCustomGapStyles $vertical $gap={24} $aligItems="center">
            <H1 $maxFontsize={72} $minFontsize={32}>
              Minimize your tabs. <br />
              Find the trends!
            </H1>
            <Paragraph $color="#8B8B8B">
              Don’t let your computer memories consumes all of those browser
              tabs.
              <br /> Findtrend let you gathers all of your favorite website into
              one place.
            </Paragraph>
            <FlexWithCustomGapStyles $gap={18}>
              <FancyButton $btnType="primary">Get Started 🔥</FancyButton>
              <TextAndArrow>
                <span>All research start from here</span>
                <img
                  src={getImage("arrow_01.svg", "svgs")}
                  alt="fancy-arrow-white"
                />
              </TextAndArrow>
            </FlexWithCustomGapStyles>
          </FlexWithCustomGapStyles>

          <FancyFloatingCardResponsiveWrapper>
            <div className="_container_fancyFloatingCard">
              {FancyFloatingCardTextAndIcon?.map((item, index) => (
                <FancyFloatingCardWrapper
                  variants={headingVariants(item.rotate)}
                  initial="initial"
                  animate={hiddenCards.includes(index) ? "initial" : "animate"}
                  transition={headingTransition}
                  $zIndex={item.zIndex}
                  $marginTop={item.marginTop}
                  $marginLeft={item.marginLeft}
                  whileTap={"initial"}
                  key={"_container_fancyFloatingCard_" + index}
                >
                  <FancyFloatingCard>
                    <img
                      src={getImage(item.logo, "svgs")}
                      alt="twitter"
                      width={31}
                      height={31}
                    />
                    <p>{item.text}</p>
                    <div
                      className="_close"
                      onClick={() => hideCard(index, setHiddenCards)}
                    >
                      <AiOutlineClose size={20} color="#FFF" />
                    </div>
                  </FancyFloatingCard>
                </FancyFloatingCardWrapper>
              ))}
            </div>
          </FancyFloatingCardResponsiveWrapper>
        </div>
      </HeroStyles>
    </AppWrapperStyles>
  );
}

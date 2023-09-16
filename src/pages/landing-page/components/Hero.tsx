import { AiOutlineClose } from "react-icons/ai";
import bgSvg from "../../../assets/svgs/Ornament.svg";
import Arrow from "../../../assets/svgs/arrow_01.svg";
import { FancyFloatingCardTextAndIcon } from "../../../constants";
import {
  AppWrapperStyles,
  FancyButton,
  FancyFloatingCard,
  FancyFloatingCardResponsiveWrapper,
  FancyFloatingCardWrapper,
  FlexWithCustomGapStyles,
  HeroH1,
  HeroStyles,
  Paragraph,
  TextAndArrow,
} from "../../../custom-style-components/landingPageStyles";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Hero() {
  const [arr, setArr] = useState(FancyFloatingCardTextAndIcon);

  const deleteCard = (index: number) => {
    const newArray = arr.filter((_, i) => i !== index);
    setArr(newArray);
  };

  return (
    <AppWrapperStyles $bgColor="black" $bgImg={bgSvg}>
      <HeroStyles>
        <Navbar />
        <div style={{ margin: "clamp(40px, 4vw, 80px)  0" }}>
          <FlexWithCustomGapStyles $vertical $gap={24}>
            <HeroH1 $maxFontsize={72} $minFontsize={32}>
              Minimize your tabs. <br />
              Find the trends!
            </HeroH1>
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
                <img src={Arrow} alt="arrow" />
              </TextAndArrow>
            </FlexWithCustomGapStyles>
          </FlexWithCustomGapStyles>

          <FancyFloatingCardResponsiveWrapper>
            <div className="_container_fancyFloatingCard">
              {arr?.map((item, index) => (
                <FancyFloatingCardWrapper
                  $zIndex={item.zIndex}
                  $marginTop={item.marginTop}
                  $marginLeft={index === 0 ? 0 : 220 * index}
                  $rotate={item.rotate}
                >
                  <FancyFloatingCard>
                    <img src={item.logo} alt="twitter" width={31} height={31} />
                    <p>{item.text}</p>
                    <div className="_close" onClick={() => deleteCard(index)}>
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

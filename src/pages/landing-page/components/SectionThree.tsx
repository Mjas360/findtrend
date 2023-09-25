import React from "react";
import {
  AppWrapperStyles,
  FlexWithCustomGapStyles,
  GridContainer,
  H1,
  ImgWrapper,
  SectionsStyles,
  Span,
} from "../../../custom-style-components/landingPageStyles";
import { SectionThreeTextArray } from "../../../constants";
import { getImage } from "../../utils/utility";

export default function SectionThree() {
  return (
    <AppWrapperStyles $bgColor="#FFF">
      <SectionsStyles>
        <FlexWithCustomGapStyles $vertical $gap={280} $minGap={160}>
          <FlexWithCustomGapStyles $gap={5} $vertical>
            {SectionThreeTextArray.map((text, index) => (
              <H1
                key={text + index}
                $maxFontsize={64}
                $minFontsize={30}
                $color={index <= 2 ? "#000" : "#ADADAD"}
                $alignText="left"
              >
                {index === 2 ? (
                  <>
                    {text} <Span $color="#ADADAD">an application that can</Span>
                  </>
                ) : (
                  text
                )}
              </H1>
            ))}
          </FlexWithCustomGapStyles>
          <FlexWithCustomGapStyles $vertical $gap={80}>
            <H1 $color="#000" $maxFontsize={64} $minFontsize={30}>
              Findtrend make +1000 Startup grow
            </H1>
            <GridContainer>
              {Array(16)
                .fill(null)
                .map((_, index) => {
                  const brandImg = getImage(`brand_${index + 1}.png`, "png");
                  const brandImgSm = getImage(
                    `brand_sm_${index + 1}.png`,
                    "png"
                  );
                  return (
                    <ImgWrapper
                      $bgColor="#F5F5F5"
                      $maxWidth={266}
                      $minWidth={162}
                      $minHeight={74}
                      $maxHeight={120}
                      $bgImg={brandImg}
                      $bgImgSm={brandImgSm}
                    />
                  );
                })}
            </GridContainer>
          </FlexWithCustomGapStyles>
        </FlexWithCustomGapStyles>
      </SectionsStyles>
    </AppWrapperStyles>
  );
}

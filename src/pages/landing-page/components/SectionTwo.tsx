import { SectionThreeTextArray } from "../../../constants";
import {
  AppWrapperStyles,
  FlexWithCustomGapStyles,
  GridContainer,
  H1,
  ImgWrapper,
  SectionsStyles,
  Span,
} from "../../../custom-style-components/landingPageStyles";
import { getImage } from "../../utils/utility";

export default function SectionTwo() {
  return (
    <AppWrapperStyles $bgColor="#FFF">
      <SectionsStyles>
        <FlexWithCustomGapStyles $vertical $gap={280} $minGap={160}>
          <FlexWithCustomGapStyles $gap={5} $minGap={0} $vertical>
            {SectionThreeTextArray.map((text, index) => (
              <H1
                key={text + index}
                $maxFontsize={64}
                $minFontsize={30}
                $color={index <= 2 ? "#000" : "#ADADAD"}
                $alignText="left"
                $noWrap
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
                      key={_ + index}
                      $bgColor="#F5F5F5"
                      $maxWidth={266}
                      $maxHeight={120}
                      $minWidth={150}
                      $minHeight={72}
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

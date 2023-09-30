import { LogoSourceLink, SectionThreeTextArray } from "../../../constants";
import {
  AppWrapperStyles,
  FlexWithCustomGapStyles,
  GridContainer,
  H1,
  ImgWrappers,
  SectionsStyles,
  Span,
} from "../../../custom-style-components/landingPageStyles";

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
              {LogoSourceLink.map((img, index) => (
                <ImgWrappers
                  key={"brand_logo_" + index}
                  $bgColor="#F5F5F5"
                  $ImgMaxHeight={img.maxHeight}
                  $ImgMaxWidth={img.maxWidth}
                  $ImgMinHeight={img.minHeight}
                  $ImgMinWidth={img.minWidth}
                  $maxHeight={120}
                  $maxWidth={266}
                  $minHeight={74}
                  $minWidth={162}
                >
                  <img
                    src={img.src}
                    width={190}
                    height={40}
                    alt={"brand_logo_" + index}
                  />
                </ImgWrappers>
              ))}
            </GridContainer>
          </FlexWithCustomGapStyles>
        </FlexWithCustomGapStyles>
      </SectionsStyles>
    </AppWrapperStyles>
  );
}

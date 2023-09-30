import {
  AppWrapperStyles,
  SectionsStyles,
  FlexWithCustomGapStyles,
  H1,
  ButtonStyles,
} from "../../../custom-style-components/landingPageStyles";

export default function SectionFive() {
  return (
    <AppWrapperStyles $bgColor="#A8FF35">
      <SectionsStyles>
        <FlexWithCustomGapStyles $vertical $gap={40} $minGap={32}>
          <div style={{ width: "100vw" }}>
            <H1 $maxFontsize={72} $minFontsize={32} $color="#000" $noWrap>
              Join us on email for
            </H1>
            <H1 $maxFontsize={72} $minFontsize={32} $color="#87D322" $noWrap>
              more trending topics
            </H1>
          </div>
          <ButtonStyles
            $btnType="primary"
            $btnBgColor="#000"
            $btnTextColor="#FFF"
          >
            Join Now
          </ButtonStyles>
        </FlexWithCustomGapStyles>
      </SectionsStyles>
    </AppWrapperStyles>
  );
}

import { SocialIcons, TweetScreenShots } from "../../../constants";
import {
  AppWrapperStyles,
  ButtonStylesVarientII,
  FlexWithCustomGapStyles,
  H1,
  ImgWrappers,
  Scrollview,
  SectionsStyles,
} from "../../../custom-style-components/landingPageStyles";

export default function SectionThree() {
  return (
    <AppWrapperStyles $bgColor="#FAFAFA">
      <SectionsStyles>
        <FlexWithCustomGapStyles $vertical $gap={80} $minGap={32}>
          <H1
            $maxFontsize={64}
            $minFontsize={30}
            $color="#000"
            $noWrap
            $alignText="center"
          >
            All platform connect to Findtrend
          </H1>
          <FlexWithCustomGapStyles>
            <Scrollview $aligItems="left" $gap={24} $minGap={16}>
              {SocialIcons.map((img, index) => (
                <ImgWrappers
                  key={"social_icon_" + index}
                  $bgColor={index === 1 ? "#A8FF35" : "#FFF"}
                  $ImgMaxHeight={img.maxHeight}
                  $ImgMaxWidth={img.maxWidth}
                  $ImgMinHeight={img.minHeight}
                  $ImgMinWidth={img.minWidth}
                  $maxHeight={124}
                  $maxWidth={124}
                  $minHeight={64}
                  $minWidth={64}
                >
                  <img
                    src={img.src}
                    width={190}
                    height={40}
                    alt={"social_icon_" + index}
                  />
                </ImgWrappers>
              ))}
            </Scrollview>
          </FlexWithCustomGapStyles>
          <FlexWithCustomGapStyles $vertical $gap={43} $minGap={16}>
            {TweetScreenShots.map((img, index) => (
              <ImgWrappers
                key={"tweet_screenshot_" + index}
                $bgColor="none"
                $ImgMaxHeight={img.maxHeight}
                $ImgMaxWidth={img.maxWidth}
                $ImgMinHeight={img.minHeight}
                $ImgMinWidth={img.minWidth}
              >
                <img
                  src={img.src}
                  width={190}
                  height={40}
                  alt={"tweet_screenshot_" + index}
                />
              </ImgWrappers>
            ))}
          </FlexWithCustomGapStyles>

          <ButtonStylesVarientII type="button" $bgColor="#000" $padding>
            View More Trend
          </ButtonStylesVarientII>
        </FlexWithCustomGapStyles>
      </SectionsStyles>
    </AppWrapperStyles>
  );
}

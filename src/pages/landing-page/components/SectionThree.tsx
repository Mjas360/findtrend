import { tweetImg } from "../../../constants";
import {
  AppWrapperStyles,
  ButtonStylesVarientII,
  FlexWithCustomGapStyles,
  H1,
  ImgWrapper,
  Scrollview,
  SectionsStyles,
} from "../../../custom-style-components/landingPageStyles";
import { getImage } from "../../utils/utility";

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
              {Array(8)
                .fill(null)
                .map((_, index) => {
                  const socialImg = getImage(
                    `social_icon_${index + 1}.png`,
                    "png"
                  );
                  const socialImgSm = getImage(
                    `social_icon_sm_${index + 1}.png`,
                    "png"
                  );
                  return (
                    <ImgWrapper
                      key={_ + "social_icon" + index}
                      $bgColor={index === 1 ? "#A8FF35" : "#FFF"}
                      $maxWidth={124}
                      $maxHeight={124}
                      $minWidth={64}
                      $minHeight={64}
                      $bgImg={socialImg}
                      $bgImgSm={socialImgSm}
                      //   onClick={() => setActiveTab(index)}
                    />
                  );
                })}
            </Scrollview>
          </FlexWithCustomGapStyles>
          {tweetImg.map((img, index) => (
            <ImgWrapper
              key={"tweetImage_" + index}
              $bgColor="none"
              $maxWidth={img.maxWidth}
              $maxHeight={img.maxHeight}
              $minWidth={img.minWidth}
              $minHeight={img.minHeight}
              $bgImg={getImage(img.imgLg, "png")}
              $bgImgSm={getImage(img.imgSm, "png")}
            />
          ))}

          <ButtonStylesVarientII $bgColor="#000" $padding>
            View More Trend
          </ButtonStylesVarientII>
        </FlexWithCustomGapStyles>
      </SectionsStyles>
    </AppWrapperStyles>
  );
}

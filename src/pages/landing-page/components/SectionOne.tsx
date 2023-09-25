import { AiOutlineClose } from "react-icons/ai";

import {
  AppWrapperStyles,
  CustumDivWithPadding,
  FancyFloatingCard,
  FlexWithCustomGapStyles,
  H1,
  Paragraph,
  SectionsStyles,
  TextAndArrow,
} from "../../../custom-style-components/landingPageStyles";
import { getImage } from "../../utils/utility";

export default function SectionOne() {
  return (
    <AppWrapperStyles $bgColor="#A8FF35">
      <SectionsStyles>
        <FlexWithCustomGapStyles $gap={60} $minGap={20} $vertical>
          <H1 $color="#000" $maxFontsize={72} $minFontsize={32}>
            Open new tabs is sh*t
          </H1>
          <FlexWithCustomGapStyles $gap={24}>
            <TextAndArrow $color="#000" $inverse $alignEnd>
              <span>solution for discover a trend</span>
              <img
                src={getImage("arrow_6.svg", "svgs")}
                alt="fancy-arrow-white"
              />
            </TextAndArrow>
            <CustumDivWithPadding
              $paddingLg="60px 80px"
              $paddingMd="24px"
              $bgColor="#FFF"
              $borderRadiusLg="16px"
              $borderRadiusMd="14px"
            >
              <FancyFloatingCard>
                <img
                  src={getImage("findtrend_logo.svg")}
                  alt="logo"
                  width={31}
                  height={31}
                />
                <p>Findtrend - Elon Musk</p>
                <div className="_close">
                  <AiOutlineClose size={20} color="#FFF" />
                </div>
              </FancyFloatingCard>
            </CustumDivWithPadding>
            <TextAndArrow $color="#000">
              <span>You just need one tab now</span>
              <img
                src={getImage("arrow_4.svg", "svgs")}
                alt="fancy-arrow-white"
              />
            </TextAndArrow>
          </FlexWithCustomGapStyles>
          <Paragraph>
            A solution for your browser tabs and don’t make your device get
            slower over time. Get ease and faster to discover a trend with just
            one tab.
          </Paragraph>
        </FlexWithCustomGapStyles>
      </SectionsStyles>
    </AppWrapperStyles>
  );
}

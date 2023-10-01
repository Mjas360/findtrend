import { useState } from "react";
import {
  AppWrapperStyles,
  ButtonStyles,
  PricingCard,
  Divider,
  FlexWithCustomGapStyles,
  H1,
  Paragraph,
  SectionsStyles,
  Switch,
  TextAndArrow,
  ResponsiveWrapper,
} from "../../../custom-style-components/landingPageStyles";
import { getImage } from "../../utils/utility";
import { PricingInfo } from "../../../constants";

export default function SectionFour() {
  const [switchValue, setSwitchValue] = useState(false);
  return (
    <AppWrapperStyles $bgColor="#000">
      <SectionsStyles>
        <FlexWithCustomGapStyles $vertical $gap={40} $minGap={28}>
          <H1
            $maxFontsize={64}
            $minFontsize={30}
            $color="#FFF"
            $noWrap
            $alignText="center"
          >
            Get your best deal
          </H1>
          <FlexWithCustomGapStyles $width={300} $gap={24} $minGap={11}>
            <Paragraph
              $maxFontsize={24}
              $minFontsize={18}
              $color={switchValue ? "#5a5a5a" : "#FFF"}
            >
              Monthly{" "}
            </Paragraph>
            <Switch
              $switched={switchValue}
              onClick={() => setSwitchValue((prev) => !prev)}
            >
              <div className="slider" />
            </Switch>

            <Paragraph
              $maxFontsize={24}
              $minFontsize={18}
              $color={switchValue ? "#FFF" : "#5a5a5a"}
            >
              Yearly{" "}
            </Paragraph>
            <TextAndArrow>
              <span>Save 10% per month</span>
              <img
                src={getImage("arrow_01.svg", "svgs")}
                alt="fancy-arrow-white"
              />
            </TextAndArrow>
          </FlexWithCustomGapStyles>
          <ResponsiveWrapper>
            {PricingInfo.map((info, index) => (
              <PricingCard $bgColor={info.bgColor} key={info.type + index}>
                <H1
                  as="h3"
                  $maxFontsize={36}
                  $minFontsize={32}
                  $color="#000"
                  $alignText="left"
                >
                  {info.type}
                </H1>
                <Paragraph
                  $maxFontsize={18}
                  $minFontsize={16}
                  $alignText="left"
                >
                  {info.subtitle}
                </Paragraph>

                <Divider $color="#000" />

                <div className="price">
                  <H1
                    as="h3"
                    $maxFontsize={64}
                    $minFontsize={58}
                    $color="#000"
                    $alignText="left"
                  >
                    ${info.price}
                    <Paragraph $maxFontsize={18} $minFontsize={18} as="span">
                      {" "}
                      / Month
                    </Paragraph>
                  </H1>
                </div>

                <div className="offers">
                  {info.offers.map((offer, index) => (
                    <div className="offer" key={"offer_" + index}>
                      <img src={getImage("check_mark.svg", "svgs")} />
                      <Paragraph
                        $maxFontsize={18}
                        $minFontsize={16}
                        $alignText="left"
                      >
                        {offer}
                      </Paragraph>
                    </div>
                  ))}
                </div>

                <ButtonStyles
                  $btnType="primary"
                  $btnBgColor={info.btnColor}
                  $btnTextColor={info.btnTextColor}
                  $btnFontWeight={700}
                  $fullWidth
                >
                  Start Free Trial
                </ButtonStyles>
              </PricingCard>
            ))}
          </ResponsiveWrapper>
        </FlexWithCustomGapStyles>
      </SectionsStyles>
    </AppWrapperStyles>
  );
}

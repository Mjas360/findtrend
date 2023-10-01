import { FooterlinksTitle } from "../../../constants";
import {
  AppTitleStyles,
  AppWrapperStyles,
  FlexWithCustomGapStyles,
  FooterStyles,
  NavLinkStyles,
  ResponsiveWrapper,
  SectionsStyles,
} from "../../../custom-style-components/landingPageStyles";
import { getImage } from "../../utils/utility";

export default function Footer() {
  return (
    <AppWrapperStyles as="footer" $bgColor="#FFF">
      <SectionsStyles $noPadding>
        <FooterStyles $justifyItems="space-between">
          <FlexWithCustomGapStyles $gap={10}>
            <img
              src={getImage("findtrend_logo_black.svg", "svgs")}
              width={40}
              height={40}
              alt="findtrend logo"
            />
            <AppTitleStyles>Findtrend</AppTitleStyles>
          </FlexWithCustomGapStyles>

          <ResponsiveWrapper $justifyItems="flex-end">
            {FooterlinksTitle.map((nav, index) => (
              <NavLinkStyles
                $btnTextColor="#333"
                $btnType="text"
                key={"nalink_" + index}
              >
                {nav}
              </NavLinkStyles>
            ))}
          </ResponsiveWrapper>
        </FooterStyles>
      </SectionsStyles>
    </AppWrapperStyles>
  );
}

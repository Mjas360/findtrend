import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { NavlinksTitle } from "../../../constants";
import {
  AppTitleStyles,
  ButtonStyles,
  FlexWithCustomGapStyles,
  MenuStyles,
  NavLinkStyles,
  NavbarStyle,
} from "../../../custom-style-components/landingPageStyles";
import { getImage } from "../../utils/utility";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavbarStyle>
      <div className="window_nav">
        <FlexWithCustomGapStyles $gap={10}>
          <img
            src={getImage("findtrend_logo.svg")}
            width={40}
            height={40}
            alt="logo"
          />
          <AppTitleStyles $light>Findtrend</AppTitleStyles>
        </FlexWithCustomGapStyles>
        <FlexWithCustomGapStyles $gap={40}>
          {NavlinksTitle.map((nav, index) => (
            <NavLinkStyles $btnType="text" key={"nalink_" + index}>
              {nav}
            </NavLinkStyles>
          ))}
        </FlexWithCustomGapStyles>
        <FlexWithCustomGapStyles>
          <ButtonStyles $btnType="text">Login</ButtonStyles>
          <ButtonStyles $btnType="primary">Register</ButtonStyles>
        </FlexWithCustomGapStyles>
      </div>
      <div className="mobile_nav">
        <div className="logo_n_icon">
          <img
            src={getImage("findtrend_logo.svg")}
            width={40}
            height={40}
            alt="logo"
          />
          <NavLinkStyles onClick={() => setOpenMenu((prev) => !prev)}>
            {openMenu ? <AiOutlineClose /> : <HiOutlineMenuAlt4 />}
          </NavLinkStyles>
        </div>
      </div>
      {openMenu && (
        <MenuStyles>
          <>
            {NavlinksTitle.map((nav, index) => (
              <NavLinkStyles $btnType="text" key={"nalink_" + index}>
                {nav}
              </NavLinkStyles>
            ))}
          </>
          <ButtonStyles $btnType="text">Login</ButtonStyles>
          <ButtonStyles $btnType="primary">Register</ButtonStyles>
        </MenuStyles>
      )}
    </NavbarStyle>
  );
}

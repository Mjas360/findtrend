import styled, { keyframes } from "styled-components";

const PgeResponsiveWidth = styled.div`
  width: clamp(320px, 90vw, 1280px);
`;
export const AppWrapperStyles = styled.section<{
  $bgColor?: string;
  $bgImg?: string;
}>`
  //width: clamp(320px, 100vw, 1280px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.$bgColor || "none"};
  background-image: url(${(props) => props.$bgImg});
`;

//  design --
export const NavbarStyle = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;

  .mobile_nav {
    display: none;
  }
  .window_nav {
    display: flex;
    width: inherit;
    justify-content: space-between;
  }

  @media (max-width: 980px) {
    .mobile_nav,
    .logo_n_icon {
      display: flex;
      color: white;
      justify-content: space-between;
      width: inherit;
      align-items: center;
      .logo_n_icon {
        z-index: 10;
      }
    }
    .window_nav {
      display: none;
    }
  }
`;

export const FlexWithCustomGapStyles = styled.div<{ $gap?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => `clamp(24px, 2vw, ${props.$gap}px)` || "10px"};
`;

export const ButtonStyles = styled.button<{ $btnType?: string }>`
  color: ${(props) => (props.$btnType === "primary" ? "#000000" : "#FFF")};
  font-size: 16px;
  font-weight: 400;
  /* font-family: "Effra"; */
  line-height: 100%;
  padding: 12px 32px;
  outline: none;
  border: none;
  border-radius: ${(props) => (props.$btnType === "primary" ? "40px" : "none")};
  background: ${(props) => (props.$btnType === "primary" ? "#FFF" : "none")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.99;
    scale: 0.9;
  }
`;

export const NavLinkStyles = styled(ButtonStyles)`
  padding: 12px 0px;
`;

export const AppTitleStyles = styled.p<{ $light?: boolean }>`
  color: ${(props) => (props.$light && "#FFF") || "#000000"};
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 100%;
`;

export const HeroStyles = styled(PgeResponsiveWidth)`
  height: 400px;
`;

const fadeIn = keyframes`
  from {
    transform: translateY(-300px);
  }
  to {
    transform: translateY(0);
  }
`;

export const MenuStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  background: #000000;
  width: 100vw;
  padding-top: 160px;
  padding-bottom: 80px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  animation: ${fadeIn} 0.4s ease-in;
  transform-origin: top;
  transform-style: preserve-3d;
`;

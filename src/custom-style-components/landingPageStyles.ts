import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const PgeResponsiveWidth = styled.div`
  width: clamp(320px, 90vw, 1280px);
`;
export const AppWrapperStyles = styled.section<{
  $bgColor?: string;
  $bgImg?: string;
}>`
  display: flex;

  justify-content: center;
  background: ${(props) => props.$bgColor || "none"};
  background-image: url(${(props) => props.$bgImg});
`;

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

export const FlexWithCustomGapStyles = styled.div<{
  $gap?: number;
  $vertical?: boolean;
}>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.$vertical ? "column" : "row")};
  gap: ${(props) => `clamp(0px, 5vw, ${props.$gap}px)` || "10px"};
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
  height: auto;
`;

const fadeIn = keyframes`
  from {
    opacity: .8;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
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

  animation: ${fadeIn} 0.3s ease-in;
  transform-origin: top;
  transform-style: preserve-3d;
`;

export const H1 = styled.h1<{
  $maxFontsize: number;
  $minFontsize: number;
  $color?: string;
}>`
  color: ${(props) => props.$color || "#fff"};
  text-align: center;
  font-size: 100px;
  font-weight: 900;
  line-height: 140%;
  text-align: center;
  white-space: nowrap;
  margin: 0;

  font-size: ${(props) => `${props.$maxFontsize}` + "px"};
  @media (max-width: 767px) {
    font-size: ${(props) => props.$minFontsize + "px"};
  }
`;

export const Paragraph = styled.p<{ $color?: string }>`
  color: ${(props) => props.$color};
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: 666px;
  margin: 0;

  @media (max-width: 767px) {
    width: 286px;
    font-size: 14px;
  }
`;

export const FancyButton = styled(ButtonStyles)`
  background: #a8ff35;
  padding: 20px 32px;
  font-weight: 700;
  margin-top: 40px;

  @media (max-width: 767px) {
    margin-top: 32px;
    padding: 12px 24px;
  }
`;

export const TextAndArrow = styled.div<{
  $color?: string;
  $inverse?: boolean;
  $alignEnd?: boolean;
  $displayOnSmallScreen?: boolean;
  $absolute?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => (props.$inverse ? "column-reverse" : "column")};
  align-items: ${(props) => (props.$alignEnd ? "end" : "start")};

  span {
    width: 93px;
    transform: rotate(6deg);
    color: ${(props) => props.$color || "#FFF"};
    text-align: center;
    font-family: New; // pending font
    font-size: 14px;
    font-weight: 400;
  }

  animation: rotateAnimation 2s ease-in-out infinite;

  @media (max-width: 1200px) {
    display: ${(props) => (props.$displayOnSmallScreen ? "flex" : "none")};
  }

  /* @media (max-width: 500px) {
    position: ${(props) => (props.$absolute ? "absolute" : "relative")};
    left: 0;
    top: 0;
  } */

  @keyframes rotateAnimation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(6deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const FancyFloatingCard = styled.div`
  width: 280px;
  height: 82px;
  overflow: hidden;
  flex-shrink: 0;
  background: #181818;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  gap: 16px;
  position: relative;

  p {
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    white-space: nowrap;
  }
  ._close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 84.645px;
    height: 82px;
    transform: rotate(-4deg);
    flex-shrink: 0;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(
      270deg,
      #181818 53.65%,
      rgba(24, 24, 24, 0.8) 100%
    );
  }
  @media (max-width: 767px) {
    width: 200px;
    height: 70px;
    p {
      font-size: 20px;
    }
  }
`;

/* transform: ${(props) => props.$rotate}; */
// $rotate?: string;
export const FancyFloatingCardWrapper = styled(motion.div)<{
  $zIndex?: number;
  $marginTop?: number;
  $marginLeft?: number;
}>`
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);

  padding: 0px 8px 8px 8px;
  position: absolute;

  z-index: ${(props) => props.$zIndex};

  left: ${(props) => props.$marginLeft + "px"};
  margin-top: ${(props) => props.$marginTop + "px"};
  animation: all 0.5s ease-in-out;
  @media (max-width: 1200px) {
    left: 0px;
    display: flex;
    position: relative;
    margin-left: 0px;
    margin-top: 0px;
  }
`;

export const FancyFloatingCardResponsiveWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin-top: 96px;
  padding-bottom: 200px;

  ._container_fancyFloatingCard {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 1000px;
    margin: 0px auto;
  }

  @media (max-width: 1200px) {
    margin-top: 60px;
    padding-bottom: 10px;
    min-height: 200px;
    ._container_fancyFloatingCard {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: auto;
    }
  }
`;

export const SectionTwoStyles = styled.div`
  padding: clamp(80px, 10vw, 140px) 0px;
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustumDivWithPadding = styled.div<{
  $paddingLg?: string;
  $paddingMd?: string;
  $bgColor?: string;
  $borderRadiusLg?: string;
  $borderRadiusMd?: string;
}>`
  padding: ${(props) => props.$paddingLg || "auto"};
  background: ${(props) => props.$bgColor || "#FFF"};
  border-radius: ${(props) => props.$borderRadiusLg || "0px"};

  @media (max-width: 767px) {
    padding: ${(props) => props.$paddingMd || "auto"};
    border-radius: ${(props) => props.$borderRadiusMd || "0px"};
  }
`;

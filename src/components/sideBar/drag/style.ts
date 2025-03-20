import styled from "styled-components";

export const Side = styled.div<{$position:string}>`
width: ${(props) =>
  props.$position === "left" || props.$position === "right"
    ? "3rem"
    : props.$position === "top" || props.$position === "bottom"
    ? "100vw"
    : "auto"};
  height: ${(props) =>
    props.$position === "left" || props.$position === "right"
      ? "100vh"
      : props.$position === "top" || props.$position === "bottom"
      ? "3rem"
      : "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  transition: position 0.5s ease-in-out;
  padding:  ${(props) =>
  props.$position === "left" || props.$position === "right"
    ? "0 0.5rem"
    : props.$position === "top" || props.$position === "bottom"
    ? "0.5rem 0"
    : "auto"}; 
  left: ${(props) => (props.$position === "right" ? "auto" : "0")};
  right: ${(props) => (props.$position ===  "left"? "auto" : "0")};
  top: ${(props) => (props.$position === "bottom" ? "auto" : "0")};
  bottom: ${(props) => (props.$position === "top" ? "auto" : "0")};
`;

export const RSide = styled.div<{$position: string}>`
  height: ${(props) =>
    props.$position === "left" || props.$position === "right"
      ? "20rem"
      : "100%"};
  width: ${(props) =>
    props.$position === "left" || props.$position === "right"
      ? "100%"
      : "20rem"};
  background-color: rgba(255, 255, 255, 0.23);
  color: white;
  border-radius: 1rem;
`;

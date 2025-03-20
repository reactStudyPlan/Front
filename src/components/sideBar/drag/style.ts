import styled from "styled-components";

export const Side = styled.div<{ $open: boolean }>`
  width: ${(props) => (props.$open ? "3rem" : "1rem")}; 
  height: 60vh;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  transition: width 0.3s ease-in-out, padding 0.3s ease-in-out;
  padding: ${(props) => (props.$open ? "0 0.5rem" : "0")}; 
  left: ${(props) => (props.$position === "left" ? "0" : "auto")};
  right: ${(props) => (props.$position === "right" ? "0" : "auto")};
  top: ${(props) => (props.$position === "top" ? "0" : "auto")};
  bottom: ${(props) => (props.$position === "bottom" ? "0" : "auto")};
`;

export const RSide = styled.div<{ $open: boolean }>`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.23);
  color: white;
  transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
  display: flex;
  align-items: center;
  border-radius: ${(props) => (props.$open ? "1rem" : "0")} 1rem 1rem ${(props) => (props.$open ? "1rem" : "0")};
`;
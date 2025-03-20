import styled from "styled-components";

export const DropArea = styled.div<{ $active: boolean; $position: string }>`
  position: fixed;
  ${(props) => (props.$position === "left" ? "left: 0; top: 0; width: 3rem; height: 100vh;" : "")}
  ${(props) => (props.$position === "right" ? "right: 0; top: 0; width: 3rem; height: 100vh;" : "")}
  ${(props) => (props.$position === "top" ? "top: 0; left: 0; width: 100vw; height: 3rem;" : "")}
  ${(props) => (props.$position === "bottom" ? "bottom: 0; left: 0; width: 100vw; height: 3rem;" : "")}
  background-color: ${(props) => (props.$active ? "rgba(255, 255, 255, 0.16)" : "transparent")};
  transition: background-color 0.2s ease-in-out;
`;
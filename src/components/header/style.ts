import styled from "styled-components";

export const Side = styled.div`
  width: ${(props) => (props.$open ? "3rem" : "1rem")}; 
  height: 60vh;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  left: 0;
  top: 20vh;
  transition: width 0.3s ease-in-out,padding 0.3s ease-in-out;
  padding: ${(props) => (props.$open ? "0 0.5rem" : "0")}; 
`;

export const RSide = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.23);
  color: white;
  transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out; /* 모서리 변경도 부드럽게 */
  display: flex;
  align-items: center;
  border-radius: ${(props) => (props.$open ? "1rem" : "0")} 1rem 1rem ${(props) => (props.$open ? "1rem" : "0")}; /* open일 때만 네 모서리
`;
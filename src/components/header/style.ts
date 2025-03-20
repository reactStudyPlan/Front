import styled from "styled-components";

export const Side = styled.div`
  width: ${(props) => (props.$open ? "3rem" : "0.5rem")}; 
  height: 60vh;
	margin: ${(props) => (props.$open ? "0.5rem" : "0")};
  background-color:rgba(255, 255, 255, 0.23);
  color: white;
  position: fixed;
  left: 0;
  top: 20vh;
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
	border-radius: ${(props) => (props.$open ? "1rem" : "0px 1rem 1rem 0px")};
  // justify-content: ${(props) => (props.$open ? "flex-start" : "center")};
  
  button {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

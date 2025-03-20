import styled from "styled-components";
import {useState} from "react";

const Container = styled.article<{isFlip : boolean}>`
  width: 6.25rem;
  height: 9.375rem;
  border-radius: 0.3125rem;
  background-color: #535bf2;
  transition: transform ease-in-out 100ms;
  &:hover{
    transform: scale(1.2)
    ${({isFlip})=>
        (isFlip ?  "perspective(800px) rotateY(0deg)":  "rotateY(180deg);")}
  };
  transform :${({isFlip})=>
      (isFlip ?  "perspective(800px) rotateY(0deg)":  "rotateY(180deg);")}
`;

const Card = () => {
  const [isFlip, setIsFlip] = useState(false);
  return (
      <>
        <Container isFlip={isFlip} onClick={()=>setIsFlip(!isFlip)}>

        </Container>
      </>
  )
}
export default Card
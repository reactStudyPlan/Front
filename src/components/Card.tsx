import styled from "styled-components";
import {useState} from "react";

const Container = styled.article<{isFlip : boolean}>`
  width: 6.25rem;
  height: 9.375rem;
  margin: 0;
  padding: 0;
  transition: transform ease-in-out 300ms;
  display: inline-grid;
  transform-style: preserve-3d;
  &:hover{
    transform: scale(1.2)
    ${({isFlip})=>
        (!isFlip ?  "perspective(800px) rotateY(0deg)":  "rotateY(180deg);")}
  };
  transform: ${({isFlip})=>
        (!isFlip ?  "perspective(800px) rotateY(0deg)":  "rotateY(180deg);")}
`;

const Content = styled.section<{isFlip: boolean}>`
  grid-area: 1/1/1/1;
  backface-visibility: hidden;
  border-radius: 0.3125rem;
  height: 100%;
  width: 100%;
`;

const FrontContent = styled(Content)`
    background-color: blue;
`;

const BackContent = styled(Content)`
    transform: rotateY(180deg);
    background-color: gray;
`;

const Card = () => {
  const [isFlip, setIsFlip] = useState(false);
  return (
      <Container isFlip={isFlip} onClick={()=>setIsFlip(!isFlip)}>
        <FrontContent isFlip={isFlip}>

        </FrontContent>
        <BackContent isFlip={isFlip}>

        </BackContent>
      </Container>
  )
}
export default Card
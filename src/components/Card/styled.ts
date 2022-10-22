import styled from "styled-components";

const handleColorType = (type: number) => {
  switch(type){
    case 1:
      return "#909EA7";
    case 2: 
      return "#03A960";
    case 3:
      return "#E3AC31";
    case 4: 
      return "#C03734";
    default: 
    return "#909EA7"
  }
}

export const Container = styled.div<{type: number}>`
  background: ${({type}) => handleColorType(type)};
  border: none;
  height: 200px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h1`
  color: #fff;
`;

export const Subtitle = styled.h2`
  color: #fff;
`;
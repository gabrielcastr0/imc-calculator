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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperText = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  color: #fff;

  @media (max-width: 425px){
    font-size: 25px;
  }
`;

export const Subtitle = styled.h2`
  color: #fff;
  text-align: center;

  @media (max-width: 425px){
    font-size: 20px;
  }
`;
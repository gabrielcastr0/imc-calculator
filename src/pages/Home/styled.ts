import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  gap: 30px;
`;

export const LeftArea = styled.div`
  flex: 1;
`;

export const Title = styled.h1``;

export const InputArea = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  div{
    display: flex; 
    flex-direction: column;
    gap: 10px;

    input{
      height: 30px;
      border-radius: 5px;
      border: 1px solid #000;
    }
  }
`;

export const RightArea = styled.div`
  flex: 1;
`;

export const SquaresArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  div{
    background: #ccc;
    border: 1px solid #000;
    height: 200px;
    border-radius: 5px;
  }
`;
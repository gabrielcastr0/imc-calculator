import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: #00bf8f;
  background: -webkit-linear-gradient(to bottom, #001510, #00bf8f);
  background: linear-gradient(to bottom, #001510, #00bf8f);
`;

export const Wrapper = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LeftArea = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  color: #fff;

  @media (max-width: 425px){
    font-size: 25px;
  }
`;

export const Subtitle = styled.h2`
  color: #fff;

  @media (max-width: 425px){
    font-size: 20px;
  }
`;

export const InputArea = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;

export const InputWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 10px;
`;

export const InputLabel = styled.label`
  color: #fff;

  span{
    color: red;
  }
`;

export const ErrorMessage = styled.span`
  color: #fff;
`;

export const Input = styled.input`
  border: none;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding-left: 10px;
  background: transparent;
  color: #fff;
  font-size: 15px;

  ::placeholder{
    color: #ccc;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 15px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  border: none;
  background: #03A960;
  border-radius: 5px;
  cursor: pointer;
`;

export const TextButton = styled.span`
  color: #fff;
  font-size: 20px;
`;

export const RightArea = styled.div``;

export const CardArea = styled.div<{imc: number}>`
  display: grid;
  grid-template-columns: ${props => props.imc === 0 ? 'repeat(2, 1fr)' : 'repeat(1fr)'};
  gap: 10px;
`;
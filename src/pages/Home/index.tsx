import { useEffect, useRef, useState } from 'react';
import Card from '../../components/Card';
import * as Styled from './styled';

function Home() {
  const weightRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);

  const [imc, setImc] = useState<number>(0);
  const [error, setError] = useState<boolean>();
 
  const handleClick = () => {

    const weightValue = Number.parseInt(weightRef.current!.value);
    const heightValue = Number.parseFloat(heightRef.current!.value);
    
    if(weightValue && heightValue > 0){
      const result = Number.parseFloat((weightValue / (heightValue * heightValue)).toFixed(2));
      setImc(result);
      setError(false);
    }else{
      setError(true);
    }
  }

  const handleClickClean = () => {
    weightRef.current!.value = '';
    heightRef.current!.value = '';
    setImc(0);
  }

  return (
    <Styled.Container>
      <Styled.Wrapper>
      <Styled.LeftArea>
        <Styled.TextWrapper>
          <Styled.Title>Calcule o seu IMC!</Styled.Title>
          <Styled.Subtitle>IMC é sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</Styled.Subtitle>
        </Styled.TextWrapper>

        <Styled.InputArea>
          <Styled.InputWrapper>
            <Styled.InputLabel>Digite seu peso <span>*</span></Styled.InputLabel>
            <Styled.Input type="number" placeholder="Ex: 70 (em kg)" ref={weightRef} />
            {error && <Styled.ErrorMessage>Campo obrigatório.</Styled.ErrorMessage>}
          </Styled.InputWrapper>

          <Styled.InputWrapper>
            <Styled.InputLabel>Digite sua altura <span>*</span></Styled.InputLabel>
            <Styled.Input type="number" placeholder="Ex: 1.85 (em metros)" ref={heightRef} />
            {error && <Styled.ErrorMessage>Campo obrigatório.</Styled.ErrorMessage>}
          </Styled.InputWrapper>
        </Styled.InputArea>

        <Styled.ButtonWrapper>
            <Styled.Button type="button" onClick={handleClick}>
              <Styled.TextButton>Calcular</Styled.TextButton>
            </Styled.Button>
            
            {imc > 0 && (
              <Styled.Button type="button" onClick={handleClickClean}>
                <Styled.TextButton>Limpar campos</Styled.TextButton>
              </Styled.Button>
            )}
        </Styled.ButtonWrapper>
      </Styled.LeftArea>

      <Styled.RightArea>
        <Styled.CardArea imc={imc}>
          {(imc === 0) && (
            <>
              <Card text="Magreza" info="IMC está entre 0 e 18.5" type={1}/>
              <Card text="Normal" info="IMC está entre 18.5 e 24.9" type={2}/>
              <Card text="Sobrepeso" info="IMC está entre 24.9 e 30" type={3}/>
              <Card text="Obesidade" info="IMC está entre 30 e 99" type={4}/>
            </>
          )}

          {(imc > 0 && imc <= 18.5) && (
            <Card text="Magreza" info="IMC está entre 0 e 18.5" type={1}/>
          )}

          {(imc >= 18.5 && imc <= 24.9) && (
            <Card text="Normal" info="IMC está entre 18.5 e 24.9" type={2}/>
          )}

          {(imc >= 24.9 && imc <= 30) && (
            <Card text="Sobrepeso" info="IMC está entre 24.9 e 30" type={3}/>
          )}

          {(imc >= 30 && imc <= 99) && (
            <Card text="Obesidade" info="IMC está entre 30 e 99" type={4}/>
          )}
        </Styled.CardArea>
      </Styled.RightArea>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Home;
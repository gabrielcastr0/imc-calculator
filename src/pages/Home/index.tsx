import { useState } from 'react';
import * as Styled from './styled';

function Home() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleClick = () => {
    const total = weight / (height * height);
    alert(total);
  }

  return (
    <Styled.Container>
      <Styled.LeftArea>
        <Styled.Title>Calcule o seu IMC!</Styled.Title>

        <Styled.InputArea>
          <div>
            <span>Peso*</span>
            <input type="text" placeholder="Ex: 70" onChange={(e: any) => setWeight(e.target.value)}/>
          </div>

          <div>
            <span>Altura*</span>
            <input type="text" placeholder="Ex: 1.85" onChange={(e: any) => setHeight(e.target.value)}/>
          </div>

          <button type="button" onClick={handleClick}>Calcular</button>
        </Styled.InputArea>

      </Styled.LeftArea>

      <Styled.RightArea>
        <Styled.SquaresArea>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
        </Styled.SquaresArea>
      </Styled.RightArea>
    </Styled.Container>
  )
}

export default Home;
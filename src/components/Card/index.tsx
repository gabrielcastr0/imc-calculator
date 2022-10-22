import * as Styled from './styled';

type Props = {
  text: string;
  info: string;
  type: number;
}

function Card({text, info, type}: Props) {
  return (
    <Styled.Container type={type}>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Subtitle>{info}</Styled.Subtitle>
    </Styled.Container>
  )
}

export default Card;
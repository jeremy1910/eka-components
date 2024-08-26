import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.textColor};
  padding: ${props => props.theme.spacings._24};
  border-radius: ${props => props.theme.spacings._16};
  box-shadow: ${props => props.theme.shadows._1};
  outline: ${props => props.theme.name === 'base' ? '1px solid #f4f4f45c' : 'none'};
`;

export default Card;
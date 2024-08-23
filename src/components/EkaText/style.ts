import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => props.theme.colors.textColor};
  font-family: ${props => props.theme.fonts.openSans.name};
  font-weight: ${props => props.theme.fonts.openSans.variants.regular};
  line-height: 1.5;
  font-size: ${props => props.theme.fontSizes._16};
  margin: 0;
  > * {
    &:not(a) {
      color: inherit;
    } 
  }
  strong,
  b {
    font-weight: 700;
  }
  em,
  i {
    font-size: italic;
  }
`;
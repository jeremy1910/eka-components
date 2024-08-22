import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Wrapper;
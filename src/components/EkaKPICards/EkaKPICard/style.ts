import styled from 'styled-components';

export const KPIWrapper = styled.p`
    color: ${props => props.theme.colors.textColor};
    font-family: ${props => props.theme.fonts.openSans.name};
    font-size: ${props => props.theme.fontSizes._42};
    font-weight: ${props => props.theme.fonts.openSans.variants.regular};
    text-align: center;
`;
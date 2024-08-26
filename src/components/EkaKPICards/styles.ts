import styled from 'styled-components';

export const TitleWrapper = styled.p`
    color: ${props => props.theme.colors.textColor};
    font-family: ${props => props.theme.fonts.openSans.name};
    font-size: ${props => props.theme.fontSizes._14};
    font-weight: ${props => props.theme.fonts.openSans.variants.semiBold};
    text-align: center;
    margin-bottom: ${props => props.theme.spacings._12};
`;
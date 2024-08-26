import styled from 'styled-components';

export const ItemWrapper = styled.div`
    color: ${props => props.theme.colors.textColor};
    font-family: ${props => props.theme.fonts.openSans.name};
    font-size: ${props => props.theme.fontSizes._12};
    font-weight: ${props => props.theme.fonts.openSans.variants.regular};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${props => props.theme.spacings._8};
`;

export const NameWrapper = styled.p`
`;

export const TimeWrapper = styled.p`
    color: #DB3838;
    font-size: ${props => props.theme.fontSizes._16};
`;

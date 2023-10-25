import styled, {css} from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.COLORS.NEUTRAL_700};
        align-items: center;
        justify-content: center;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.l}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        margin-top: 10px;
    `}
`

export const SubTitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GREEN_600};
        font-size: ${theme.FONT_SIZE.md}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        margin-top: 10px;
        letter-spacing: 2px;
        
    `}
`

export const ContainerInput = styled.View`
    gap: 15px;
    margin-top: 10px;
`
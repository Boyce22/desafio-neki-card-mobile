import styled, {css} from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        background-color: ${theme.COLORS.GREEN_600};
        width: 200px;
        border-radius: 8px;
        height: 45px;
        margin-top: 18px;
    `}
`;

export const Button = styled.TouchableOpacity`

`

export const ContainerButton = styled.View`
    ${({theme}) => css`
        justify-content: center;
        align-items: center;
    `}
`

export const ButtonText = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.md}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        margin-top: 10px;
        letter-spacing: 2px;
    `}
`
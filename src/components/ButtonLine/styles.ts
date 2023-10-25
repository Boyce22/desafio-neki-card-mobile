import styled, {css} from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const Button = styled.TouchableOpacity`

`

export const TextButton = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        font-size: ${theme.FONT_SIZE.lg}px;
        color: ${theme.COLORS.GREEN_600};
    `}
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        font-size: ${theme.FONT_SIZE.md}px;
        color: ${theme.COLORS.WHITE};
    `}
    text-align: center;
`
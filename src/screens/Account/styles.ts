import styled, {css} from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.COLORS.NEUTRAL_700};
        justify-content: center;
        align-items: center;
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
        text-align: center;
        margin: 10px;
    `}
`

export const LogoutButton = styled.TouchableOpacity`

`

export const TextButton = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.md}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        letter-spacing: 2px;
    `}
`
export const ContainerButton = styled.View`
    ${({ theme }) => css`
        justify-content: center;
        align-items: center;
        width: 200px;
        padding: 15px;
        border-radius: 10px;
        background-color: ${theme.COLORS.GREEN_600};
        align-items: center;
        justify-content: center;
        text-align: center;
    `}
`
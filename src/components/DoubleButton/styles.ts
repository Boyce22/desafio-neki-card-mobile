import styled, { css } from "styled-components/native";

export const ContainerButtons = styled.View`
    ${({ theme }) => css`
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 15px;
    `}
`;

export const Button = styled.TouchableOpacity`

`
export const ContainerButtonLeft = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_700};
        width: 120px;
        border-radius: 4px;
        height: 50px;
        margin-top: 18px;
    `}
`;

export const ContainerButtonRight = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GREEN_600};
        width: 120px;
        border-radius: 4px;
        height: 45px;
        margin-top: 18px;
    `}
`;

export const ContainerButton = styled.View`
    ${({ theme }) => css`
        justify-content: center;
        align-items: center;
    `}
`

export const ButtonText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.md}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
        margin-top: 10px;
    `}
`

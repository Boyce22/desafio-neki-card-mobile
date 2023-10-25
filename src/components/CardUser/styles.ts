import styled, { css } from "styled-components/native";

export const CardContainer = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_700};
        width: 380px;
        min-height: 400px;
        border-radius:8px;
    `}
        margin-top: 25px;
        padding: 12px;
        align-self: center;
    `

export const CollaboratorPhoto = styled.Image`
    ${({ theme }) => css`
        width: 100px;
        height: 100px;
        border-radius: 6px;
        margin-bottom: 10px;
    `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.sm}px;
        margin-bottom: 10px;
    `}
`;

export const InfoRowWrapper = styled.View`
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
`

export const InfoUser = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.sm}px;
        margin-bottom: 10px;
    `}
`;

export const IconWrapper = styled.View`
    flex-direction: row;
    gap: 10px;
    position: absolute;
    top: 5px;
    right: 8px;
`

export const InfoWrapper = styled.View`

`
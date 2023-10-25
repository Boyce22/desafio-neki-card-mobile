import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({ theme }) => css`
        flex: 1;
        background-color: ${theme.COLORS.NEUTRAL_700};
        align-items: center;
        justify-content: center;
    `}
`;

export const CollaboratorPhoto = styled.Image`
    ${({ theme }) => css`
        width: 160px;
        height: 160px;
        margin-bottom: 10px;
    `}
`

export const ContainerInput = styled.View`
    gap: 15px;
    margin-top: 10px;
`

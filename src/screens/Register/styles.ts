import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.COLORS.NEUTRAL_700};
        align-items: center;
        justify-content: center;
    `}
`;


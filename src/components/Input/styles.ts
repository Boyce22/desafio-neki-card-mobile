import styled, { css } from "styled-components/native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.NEUTRAL_800};
        height: 50px;
        width: 320px;
        flex-direction: row;
        align-items: center;
    `}
`;

export const Input = styled.TextInput`
    ${({ theme }) => css`
        height: 50px;
        width: 78%;
        padding: 10px;
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.sm}px;
        font-family: ${theme.FONT_FAMILY.MEDIUM};
    `}
    
`

export const EyeOpen = styled(Entypo).attrs(({ theme }) => ({
    name: 'eye',
    size: 30,
    color: theme.COLORS.GREEN_700,
}))`
`

export const EyeClosed = styled(Entypo).attrs(({ theme }) => ({
    name: 'eye-with-line',
    size: 30,
    color: theme.COLORS.GREEN_700,
}))`
`

export const KeyIcon = styled(FontAwesome5).attrs(({ theme }) => ({
    name: 'key',
    size: 26,
    color: theme.COLORS.GREEN_700,
}))`
    margin-left: 8px;
`

export const SandBoxIcon = styled(AntDesign).attrs(({ theme }) => ({
    name: 'CodeSandbox',
    size: 30,
    color: theme.COLORS.GREEN_700,
}))`
    margin-left: 6px;
`


export const AtIcon = styled(Feather).attrs(({ theme }) => ({
    name: 'at-sign',
    size: 30,
    color: theme.COLORS.GREEN_700,
}))`
    margin-left: 6px;
`
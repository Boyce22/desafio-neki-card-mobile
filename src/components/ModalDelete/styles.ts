import styled, {css} from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.BLACK_1000};
        width: 350px;
        align-items: center;
        align-self: center;
        padding: 30px;
        position: absolute;
        z-index: 2;
        justify-content: center;
        flex: 1;
        margin-top: 200px;
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: 20px;
        font-weight: bold;
        color: ${theme.COLORS.WHITE};
        margin-bottom: 10px;
    `}
`

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        font-size: 16px;
        color: ${theme.COLORS.WHITE};
        margin-bottom: 10px;
    `}
`

export const WarningIcon = styled(AntDesign).attrs({
    name: "closecircle",
    size: 40,
    color: '#047857',
})`
    margin-bottom: 10px;
`

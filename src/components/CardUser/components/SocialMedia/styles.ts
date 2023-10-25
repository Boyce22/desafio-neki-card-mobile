import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 17px;
    margin-right: 17px;
`

export const SocialMediaName = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.sm}px;
    `} 
`

export const SocialMediaWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`

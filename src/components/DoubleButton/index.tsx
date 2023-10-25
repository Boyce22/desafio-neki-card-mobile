import { TouchableOpacityProps } from 'react-native';
import { Button as ButtonStyled, ButtonText, ContainerButton, ContainerButtonLeft, ContainerButtonRight, ContainerButtons  } from './styles'

interface ButtonProps   {
    buttonLeftText: string;
    buttonRightText: string;
    onPressLeft?: () => void;
    onPressRight?: () => void;
}

export function DoubleButton({ buttonLeftText, buttonRightText, onPressLeft, onPressRight }: ButtonProps) {
    return (
        <>
        <ContainerButtons>
            <ContainerButtonLeft>
                <ButtonStyled onPress={onPressLeft}>
                    <ContainerButton>
                        <ButtonText>{buttonLeftText}</ButtonText>
                    </ContainerButton>
                </ButtonStyled>
            </ContainerButtonLeft>
            <ContainerButtonRight>
                <ButtonStyled onPress={onPressRight}>
                    <ContainerButton>
                        <ButtonText>{buttonRightText}</ButtonText>
                    </ContainerButton>
                </ButtonStyled>
            </ContainerButtonRight>
            </ContainerButtons>
        </>
    )
}
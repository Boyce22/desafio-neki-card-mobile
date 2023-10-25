import { Container, Button as ButtonStyled, ButtonText, ContainerButton } from './stytes'
import { TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    buttonText: string;
}

export function Button({ buttonText, ...rest }: ButtonProps) {
    return (
        <>
            <Container>
                <ButtonStyled {...rest}>
                    <ContainerButton>
                        <ButtonText>{buttonText}</ButtonText>
                    </ContainerButton>
                </ButtonStyled>
            </Container>
        </>
    )
}
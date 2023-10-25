import { TouchableOpacityProps} from 'react-native'
import { Button, Container, TextButton, Title} from './styles'

 interface ButtonLineProps extends TouchableOpacityProps {
    buttonText: string;
    titleText: string;
}

export function ButtonLine({buttonText, titleText, ...rest}: ButtonLineProps){
    return(
        <Container>
            <Button {...rest}>
                <Title>{titleText}</Title>
                <TextButton>{buttonText}</TextButton>
            </Button>
        </Container>
    )
}
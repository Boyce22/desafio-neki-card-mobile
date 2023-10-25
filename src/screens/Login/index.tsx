import { useState } from 'react'
import { Container, Title, SubTitle, ContainerInput } from './styles'
import { InputStyled } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonLine } from '../../components/ButtonLine'
import { FieldValues, useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import { ToastAndroid } from 'react-native'


type IFormInput = {
    [name: string]: any;
}
interface ScreenNavigationProp {
    navigate: (screen: string) => void;
}

export function Login() {

    const { signIn } = useAuth();
    const { navigate } = useNavigation<ScreenNavigationProp>()

    const { control, handleSubmit } = useForm<FieldValues>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function showToast() {
        
    }

    async function handleLogin(form: IFormInput) {
        const { email, password } = form
        try {
            await signIn(email, password)
            ToastAndroid.show("Welcome again!", ToastAndroid.SHORT);
        } catch (error) {
            const errorMessage = (error as Error).message;
            ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        }
    }

    return (
        <Container>
            <Title>NEKICARD</Title>
            <SubTitle>Sign in to continue</SubTitle>
            <ContainerInput>
                <InputStyled
                    control={control}
                    name='email'
                    type='e-mail'
                    placeholder='Your e-mail'
                />
                <InputStyled
                    type='password'
                    placeholder='Your password'
                    control={control}
                    name='password'
                />
            </ContainerInput>
            <Button
                buttonText='Sign in'
                onPress={handleSubmit(handleLogin)}
            />
            <ButtonLine
                titleText='Are you a contributor?'
                buttonText='Register here collaborator'
                onPress={() => navigate('Register')}
            />
        </Container>
    )
}
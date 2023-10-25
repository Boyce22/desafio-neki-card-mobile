import { Container, ContainerButton, LogoutButton, SubTitle, TextButton, Title } from './styles'
import { useAuth } from '../../hooks/useAuth'

export function Account() {

    const {logout} = useAuth()
    return (
        <Container>
            <Title>Nekicard</Title>
            <SubTitle>Manage Talent with Ease, Anytime, Anywhere - Version 1.0.0</SubTitle>
            <ContainerButton>
                <LogoutButton onPress={() => logout()}>
                    <TextButton>Logout</TextButton>
                </LogoutButton>
            </ContainerButton>
        </Container>
    )
}
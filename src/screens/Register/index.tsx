import { Container, } from './styles'
import { FormCollaborator } from '../../components/FormCollaborator';
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native';


export function Register() {

    return (
        <>
            <Container>
                <FormCollaborator/>
            </Container>
        </>
    )
}
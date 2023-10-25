import { Container, SubTitle, Title, WarningIcon } from './styles'
import { DoubleButton } from '../DoubleButton'

type ModalDeleteProps = {
    title: string;
    subtitle: string;
    onPressLeft?: () => void;
    onPressRight?: () => void;
}

export function ModalDelete({ title, subtitle, onPressLeft, onPressRight }: ModalDeleteProps) {
    return (
        <Container>
            <WarningIcon/>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <DoubleButton
                buttonLeftText='Cancel'
                buttonRightText='Delete'
                onPressLeft={onPressLeft}
                onPressRight={onPressRight}    
            />
        </Container>
    )
}
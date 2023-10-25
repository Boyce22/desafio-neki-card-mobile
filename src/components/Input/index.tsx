import { useState } from 'react'
import { Control, Controller } from 'react-hook-form';
import {
    Container, Input, EyeClosed, EyeOpen,
    KeyIcon, SandBoxIcon, AtIcon
} from './styles'
import { TextInputProps, TouchableOpacity } from 'react-native'

interface InputProps extends TextInputProps {
    type: 'e-mail' | 'password' | 'form';
    control: Control;
    name: string;
}

export function InputStyled({ type, control, name, ...rest }: InputProps) {
    const [isVisible, setIsVisible] = useState(false)

    function toggleIsVisible() {
        setIsVisible((prevState) => !prevState)
    }

    return (
        <>
            {type === 'password' ? (
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { onChange, value } }) => (
                        <Container>
                            <KeyIcon />
                            <Input
                                {...rest}
                                secureTextEntry={!isVisible}
                                placeholderTextColor={'#fff'}
                                onChangeText={onChange}
                                value={value}
                            />
                            {isVisible ? (
                                <TouchableOpacity onPress={() => toggleIsVisible()}>
                                    <EyeOpen />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => toggleIsVisible()}>
                                    <EyeClosed />
                                </TouchableOpacity>
                            )}
                        </Container>
                    )}
                />
            ) : type === 'form' ? (
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { onChange, value } }) => (
                        <Container>
                            <SandBoxIcon />
                            <Input
                                {...rest}
                                placeholderTextColor={'#fff'}
                                onChangeText={onChange}
                                value={value}
                            />
                        </Container>
                    )}
                />
            ) : (
                <>
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { onChange, value } }) => (
                        <Container>
                            <AtIcon />
                            <Input
                                {...rest}
                                placeholderTextColor={'#fff'}
                                keyboardType='email-address'
                                onChangeText={onChange}
                                value={value}
                            />
                        </Container>
                    )}
                    />
                </>
            )}
        </>
    )
}

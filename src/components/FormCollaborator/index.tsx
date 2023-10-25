import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { InputStyled } from "../Input";
import { ButtonLine } from "../ButtonLine";
import { DoubleButton } from "../DoubleButton";
import { FieldValues, useForm } from 'react-hook-form'
import { CollaboratorPhoto, ContainerInput } from "./styles";
import { PersonalData, collaboratorRegister } from "../../utils/CollaboratorService";
import { ContactData } from "../../utils/CollaboratorService";
import { useNavigation } from "@react-navigation/native";

type IFormInput = {
    [name: string]: any;
}

interface ScreenNavigationProp {
    navigate: (screen: string) => void;
}

export function FormCollaborator() {

    const [secondPart, setSecondPart] = useState(false)
    const [userUriPhoto, setUserUriPhoto] = useState('https://images-platform.99static.com/6_6i7LQxz1Ml0J2wuCz8Rw4uR_0=/8x0:2000x1992/500x500/top/smart/99designs-contests-attachments/60/60096/attachment_60096929')
    const [userPhoto, setUserPhoto] = useState({} as File)
    const [contactData, setContactData] = useState({} as ContactData)
    const [personalData, setPersonalData] = useState({} as PersonalData)

    const { control, handleSubmit, reset, getValues, setValue } = useForm<FieldValues>()

    const { navigate } = useNavigation<ScreenNavigationProp>()

    function handleBackLogin() {
        navigate('Login')
    }

    async function handleUserPhotoSelect() {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        const photoSelected = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            aspect: [4, 4],
            allowsEditing: true,
        });
        if (photoSelected.canceled) {
            return;
        }
        if (photoSelected.assets && photoSelected.assets.length > 0) {
            setUserUriPhoto(photoSelected.assets[0].uri);
        }
        const fileExtension = photoSelected.assets[0].uri.split('.').pop();
        const photoFile = {
            name: `photo.${fileExtension}`,
            uri: photoSelected.assets[0].uri,
            type: `${photoSelected.assets[0].type}/${fileExtension}`
        } as any;
        setUserPhoto(photoFile);
    }

    function handleSecondPart(form: IFormInput) {
        setContactData((prevState) => ({
            ...prevState,
            email: form.email,
        }));
        setPersonalData({
            name: form.name,
            lastName: form.lastName,
            socialName: form.socialName,
            birthDate: form.birthDate,
        });
        reset();
        setSecondPart((prevState) => !prevState)
    }

    async function handleCollaboratorRegister(form: IFormInput) {
        setContactData({
            email: form.email,
            telephone: form.telephone,
            github: form.github,
            facebook: form.facebook,
            instagram: form.instagram,
            linkedin: form.linkedin,
        });
        await collaboratorRegister(personalData, contactData, userPhoto);
        handleBackLogin();
    }

    return (
        <>
            <CollaboratorPhoto
                source={{ uri: userUriPhoto }} />
            <ButtonLine
                titleText='Add photo'
                buttonText='Select photo'
                onPress={handleUserPhotoSelect}
            />
            {!secondPart ?
                <ContainerInput>
                    <InputStyled
                        control={control}
                        name="email"
                        type='form'
                        onChange={(value) => setValue('email', value)}
                        placeholder='E-mail'
                    />
                    <InputStyled
                        control={control}
                        name="name"
                        type='form'
                        placeholder='Name'
                        onChange={(value) => setValue('name', value)}
                    />
                    <InputStyled
                        control={control}
                        name="lastName"
                        type='form'
                        placeholder='Last Name'
                        onChange={(value) => setValue('lastName', value)}
                    />
                    <InputStyled
                        control={control}
                        name="socialName"
                        type='form'
                        onChange={(value) => setValue('socialName', value)}
                        placeholder='Social Name'
                    />
                    <InputStyled
                        control={control}
                        name="birthDate"
                        type='form'
                        onChange={(value) => setValue('birthDate', value)}
                        placeholder='Birth data'
                    />
                    <DoubleButton
                        buttonLeftText={'Back'}
                        onPressLeft={() => handleBackLogin()}
                        buttonRightText='Next'
                        onPressRight={() => handleSecondPart(getValues())}
                    />
                </ContainerInput>
                :
                <ContainerInput>
                    <InputStyled
                        control={control}
                        name="telephone"
                        type='form'
                        onChange={(value) => setValue('telephone', value)}
                        placeholder='Telephone'
                    />
                    <InputStyled
                        control={control}
                        name="github"
                        type='form'
                        onChange={(value) => setValue('github', value)}
                        placeholder='Github'
                    />
                    <InputStyled
                        control={control}
                        name="facebook"
                        type='form'
                        onChange={(value) => setValue('facebook', value)}
                        placeholder='Facebook'
                    />
                    <InputStyled
                        control={control}
                        name="instagram"
                        type='form'
                        onChange={(value) => setValue('instagram', value)}
                        placeholder='Instagram'
                    />
                    <InputStyled
                        control={control}
                        name="linkedin"
                        type='form'
                        onChange={(value) => setValue('linkedin', value)}
                        placeholder='Linkedin'
                    />
                    <DoubleButton
                        buttonLeftText='Previous'
                        onPressLeft={() => handleSecondPart(getValues())}
                        onPressRight={handleSubmit(handleCollaboratorRegister)}
                        buttonRightText='Send'
                    />
                </ContainerInput>
            }

        </>
    )
}

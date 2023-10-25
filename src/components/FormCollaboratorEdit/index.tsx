import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { InputStyled } from "../Input";
import { ButtonLine } from "../ButtonLine";
import { DoubleButton } from "../DoubleButton";
import { FieldValues, useForm } from 'react-hook-form'
import { CollaboratorPhoto, ContainerInput } from "./styles";
import { PersonalData, updateCollaborator } from "../../utils/CollaboratorService";
import { ContactData } from "../../utils/CollaboratorService";
import * as FileSystem from 'expo-file-system';

type collaboratorForm = {
    collaboradorId: number;
    onBack: () => void;
}

type IFormInput = {
    [name: string]: any;
}

export function FormCollaboratorEdit({ collaboradorId, onBack }: collaboratorForm) {
    const [secondPart, setSecondPart] = useState(false)
    const [userUriPhoto, setUserUriPhoto] = useState('https://images-platform.99static.com/6_6i7LQxz1Ml0J2wuCz8Rw4uR_0=/8x0:2000x1992/500x500/top/smart/99designs-contests-attachments/60/60096/attachment_60096929')
    const [userPhoto, setUserPhoto] = useState({})
    const [contactData, setContactData] = useState({} as ContactData)
    const [personalData, setPersonalData] = useState({} as PersonalData)

    const { control, handleSubmit, setValue, reset, getValues } = useForm<FieldValues>()

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
            const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
        }
        const fileExtension = userUriPhoto.split('.').pop();
        const photoFile = {
            name: `photo.${fileExtension}`,
            uri: photoSelected.assets[0].uri,
            type: `image/${fileExtension}`
        } as any;
        setUserPhoto(photoFile);
    }

    async function handleCollaboratorUpdate(form: IFormInput) {
        setContactData({
            email: form.email,
            telephone: form.telephone,
            github: form.github,
            facebook: form.facebook,
            instagram: form.instagram,
            linkedin: form.linkedin,
        });
        await updateCollaborator(personalData, contactData, collaboradorId);
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
        setSecondPart((prevState) => !prevState);
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
                        placeholder='E-mail'
                        onChange={(value) => setValue('email', value)}
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
                        placeholder='Social Name'
                        onChange={(value) => setValue('socialName', value)}
                    />
                    <InputStyled
                        control={control}
                        name="birthDate"
                        type='form'
                        placeholder='Birth data'
                        onChange={(value) => setValue('birthDate', value)}
                    />
                    <DoubleButton
                        buttonLeftText={'Back'}
                        onPressLeft={onBack}
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
                        placeholder='Telephone'
                        onChange={(value) => setValue('telephone', value)}
                    />
                    <InputStyled
                        control={control}
                        name="github"
                        type='form'
                        placeholder='Github'
                        onChange={(value) => setValue('github', value)}
                    />
                    <InputStyled
                        control={control}
                        name="facebook"
                        type='form'
                        placeholder='Facebook'
                        onChange={(value) => setValue('facebook', value)}
                    />
                    <InputStyled
                        control={control}
                        name="instagram"
                        type='form'
                        placeholder='Instagram'
                        onChange={(value) => setValue('instagram', value)}
                    />
                    <InputStyled
                        control={control}
                        name="linkedin"
                        type='form'
                        placeholder='Linkedin'
                        onChange={(value) => setValue('linkedin', value)}
                    />
                    <DoubleButton
                        buttonLeftText='Previous'
                        onPressLeft={() => handleSecondPart(getValues())}
                        onPressRight={handleSubmit(handleCollaboratorUpdate)}
                        buttonRightText='Send'
                    />
                </ContainerInput>
            }

        </>
    )
}

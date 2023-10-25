import { TouchableOpacity } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import { UserSocialMedia } from './components/SocialMedia';
import { CollaboratorDTO } from "../../dto/CollaboratorDTO";
import { CardContainer, CollaboratorPhoto, InfoRowWrapper, InfoWrapper, IconWrapper, Title, InfoUser } from "./styles";

type CardUserProps = {
    collaborator: CollaboratorDTO;
    onDeleteCollaborator?: () => void;
    onEditCollaborator?: () => void;
    isPreview?: boolean;
}

export function CardUser({ collaborator, isPreview, onDeleteCollaborator, onEditCollaborator }: CardUserProps) {

    const nekiImg = 'https://i.stack.imgur.com/frlIf.png'
    const imageUrlFromBackend = collaborator.profileImage;
    let imageName, frontendImageUrl;
    try {
        const parts = imageUrlFromBackend.split('/');
        imageName = parts[parts.length - 1]
        frontendImageUrl = `../../../assets/${imageName}`;
    } catch (error) {
        console.error('Error while processing image URL:', error);
    }

    const iconSize = 25;

    return (
        <>
            {!isPreview ?
                <CardContainer>
                    <InfoRowWrapper>
                        <IconWrapper>
                            <TouchableOpacity onPress={onEditCollaborator}>
                                <Octicons
                                    name="pencil"
                                    size={iconSize}
                                    color="#F8F9FA"
                                />
                            </TouchableOpacity >
                            <TouchableOpacity onPress={onDeleteCollaborator}>
                                <Octicons
                                    name="trash"
                                    size={iconSize}
                                    color="#dc2626"
                                />
                            </TouchableOpacity>
                        </IconWrapper>
                        <CollaboratorPhoto
                            source={{ uri: nekiImg }}
                        />

                        <InfoWrapper>
                            <Title>ID</Title>
                            <InfoUser>{collaborator.id}</InfoUser>
                        </InfoWrapper>

                        <InfoWrapper>
                            <Title>Nome:</Title>
                            <InfoUser>{collaborator.name}</InfoUser>
                        </InfoWrapper>
                    </InfoRowWrapper>
                    <InfoRowWrapper>
                        <InfoWrapper>
                            <Title>Data de nascimento:</Title>
                            <InfoUser>{collaborator.birthDate}</InfoUser>
                        </InfoWrapper>

                        <InfoWrapper>
                            <Title>Nome social:</Title>
                            <InfoUser>{collaborator.socialName}</InfoUser>
                        </InfoWrapper>
                    </InfoRowWrapper>
                    <InfoRowWrapper>
                        <InfoWrapper>
                            <Title>E-mail:</Title>
                            <InfoUser>{collaborator.email}</InfoUser>
                        </InfoWrapper>

                        <InfoWrapper>
                            <Title>Telefone:</Title>
                            <InfoUser>{collaborator.telephone}</InfoUser>
                        </InfoWrapper>
                    </InfoRowWrapper>
                    <UserSocialMedia
                        instagram={collaborator.instagram}
                        github={collaborator.github}
                        facebook={collaborator.facebook}
                        linkedin={collaborator.linkedin}
                    />
                </CardContainer>


                :
                <CardContainer>
                    <InfoRowWrapper>
                        <CollaboratorPhoto
                            source={{ uri: frontendImageUrl }}
                        />
                        <InfoWrapper>
                            <Title>ID</Title>
                            <InfoUser>1</InfoUser>
                        </InfoWrapper>

                        <InfoWrapper>
                            <Title>Nome:</Title>
                            <InfoUser>{collaborator.id}</InfoUser>
                        </InfoWrapper>
                    </InfoRowWrapper>
                    <InfoRowWrapper>
                        <InfoWrapper>
                            <Title>Data de nascimento:</Title>
                            <InfoUser>{collaborator.birthDate}</InfoUser>
                        </InfoWrapper>

                        <InfoWrapper>
                            <Title>Nome social:</Title>
                            <InfoUser>{collaborator.socialName}</InfoUser>
                        </InfoWrapper>
                    </InfoRowWrapper>
                    <InfoRowWrapper>
                        <InfoWrapper>
                            <Title>E-mail:</Title>
                            <InfoUser>{collaborator.email}</InfoUser>
                        </InfoWrapper>

                        <InfoWrapper>
                            <Title>Telefone:</Title>
                            <InfoUser>{collaborator.telephone}</InfoUser>
                        </InfoWrapper>
                    </InfoRowWrapper>
                    <UserSocialMedia
                        instagram={collaborator.instagram}
                        github={collaborator.github}
                        facebook={collaborator.facebook}
                        linkedin={collaborator.linkedin}
                    />
                </CardContainer>
            }
        </>
    );
}
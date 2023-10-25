import { Container, SocialMediaName, SocialMediaWrapper } from './styles'
import IconAnt from 'react-native-vector-icons/AntDesign';

type UserSocialMediaProps = {
    instagram: string;
    github: string;
    facebook: string;
    linkedin: string;
}

export function UserSocialMedia({ facebook, github, instagram, linkedin }: UserSocialMediaProps) {
    return (
        <Container>
            <SocialMediaWrapper>
                <IconAnt name="instagram" size={30} color="#DD2A7B" />
                <SocialMediaName>{instagram}</SocialMediaName>
            </SocialMediaWrapper>
            <SocialMediaWrapper>
                <IconAnt name="github" size={30} color="#C9D1D9" />
                <SocialMediaName>{github}</SocialMediaName>
            </SocialMediaWrapper>
            <SocialMediaWrapper>
                <IconAnt name="facebook-square" size={30} color="#0866FF" />
                <SocialMediaName>{facebook}</SocialMediaName>
            </SocialMediaWrapper>
            <SocialMediaWrapper>
                <IconAnt name="linkedin-square" size={30} color="#378FE9" />
                <SocialMediaName>{linkedin}</SocialMediaName>
            </SocialMediaWrapper>
        </Container>
    )
}
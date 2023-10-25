import App from "../../App";
import { api } from "../services/api";
import { AppError } from "./AppError";

export type PersonalData = {
    name: string;
    lastName: string;
    birthDate: string;
    socialName: string;
}

export type ContactData = {
    email: string;
    telephone: string;
    linkedin: string;
    github: string;
    instagram: string;
    facebook: string;
}

function formatDate(inputDate: string) {
    const dateParts = inputDate.split('/');
    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];
    return `${year}-${month}-${day}`;
}

export async function collaboratorRegister(personalData: PersonalData, contactData: ContactData, userPhoto: File) {
    const formattedPersonalData = personalData.birthDate ? { ...personalData, birthDate: formatDate(personalData.birthDate) } : personalData;
    const collaborator = { ...formattedPersonalData, ...contactData };
    try {
        await api.post('/collaborators/signUp', collaborator);
    } catch (error) {
        throw new AppError('Failed to register collaborator. Please check your credentials.');
    }
    try {
        await saveProfileImage(contactData.email, userPhoto);
    } catch (error) {
        throw new AppError('Failed to save profile image. Please check your credentials.');
    }
}

export async function saveProfileImage(email : string, photoCollaborator : File) {
    const formData = new FormData();
    formData.append('photo', photoCollaborator);
    try {
        await api.post(`/collaborators/photo/${email}`, formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return "Avatar saved successfully.";
    } catch (error) {
        throw new AppError('Failed to save profile image. Please check your credentials.');
    }
}

export async function updateCollaborator(personalData : PersonalData, contactData : ContactData, id : number) {
    const formattedPersonalData = personalData.birthDate
        ? { ...personalData, birthDate: formatDate(personalData.birthDate) }
        : personalData;

    const collaborator = { ...formattedPersonalData, ...contactData };
    const updatedCollaborator = JSON.stringify(collaborator); 

    try {
        await api.put(`/collaborators/update/${id}`, updatedCollaborator, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        throw new AppError('Failed to update collaborator. Please check your credentials.');
    }
}

export function collaboratorDelete(collaboratorId: number) {
    try {
        api.delete(`/collaborators/delete/${collaboratorId}`);
    } catch (error) {
        throw new AppError('Failed to delete collaborator. Please check your credentials.');
    }
}

export async function fetchAllCollaborators() {
    try {
        const { data } = await api.get('/collaborators/findAll/active');
        return data;
    } catch (error) {
        console.log(error);
    }
}
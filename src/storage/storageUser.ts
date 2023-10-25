import { UserDTO } from "../dto/UserDTO";
import { USER_STORAGE, USER_TOKEN } from "./storageConfig";

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setUserStorageAndToken(user: UserDTO, token: string) {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
    await AsyncStorage.setItem(USER_TOKEN, token);
}

export async function getUserStoraged() {
    const user = await AsyncStorage.getItem(USER_STORAGE);

    if (user) {
        return JSON.parse(user);
    }
    return null;
}

export async function getTokenStoraged() {
    const token = await AsyncStorage.getItem(USER_TOKEN);

    if (token) {
        return token;
    }

    return null;
}


export async function removeUserStorage() {
    await AsyncStorage.removeItem(USER_STORAGE);
}
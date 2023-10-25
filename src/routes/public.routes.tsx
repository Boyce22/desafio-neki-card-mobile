import { Platform } from 'react-native'

import { InfoCard } from '../screens/InfoCard'

import { useTheme } from 'styled-components/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';


export default function PublicRoutes() {
    
    const {Screen, Navigator} = createNativeStackNavigator();

    return (
        <>
            <NavigationContainer>
                <Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                    <Screen name='Login' component={Login} />
                    <Screen name='Register' component={Register} />
                </Navigator>
            </NavigationContainer>
        </>
    );
}

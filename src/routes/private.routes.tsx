import { Platform } from 'react-native'

import { InfoCard } from '../screens/InfoCard'

import { useTheme } from 'styled-components/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Account } from '../screens/Account';

export default function PrivateRoutes() {

  const { COLORS } = useTheme()
  const { Navigator, Group, Screen } = createBottomTabNavigator();
  const iconSize = 30

  return (
    <>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: COLORS.GREEN_700,
            tabBarInactiveTintColor: COLORS.WHITE,
            tabBarStyle: {
              backgroundColor: COLORS.BLACK_700,
              borderTopWidth: 0,
              height: Platform.OS === 'android' ? 'auto' : 96,
              position: 'absolute',
              minHeight: 60,
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
              width: 300,
              left: 50,
            }
          }}>
          <Screen
            name='InfoCard'
            component={InfoCard}
            options={{

              tabBarIcon: ({ color }) =>
                <MaterialCommunityIcons
                  name='home'
                  size={iconSize}
                  color={color}
                />
            }}
          />
          <Screen
            name='Account'
            component={Account}
            options={{
              tabBarIcon: ({ color }) =>
                <MaterialCommunityIcons
                  name='account-convert-outline'
                  size={iconSize}
                  color={color}
                />
            }}
          />
        </Navigator>
      </NavigationContainer>

    </>
  );
}

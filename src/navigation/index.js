import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import OpenForm from '../screens/OpenForm'
import ListForm from '../screens/ListForm'

const Stack = createNativeStackNavigator()

export default props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {props => (
              <Home {...props} />
            )}
          </Stack.Screen>
          <Stack.Screen name='ListForm' component={ListForm} />
          <Stack.Screen name='OpenForm' component={OpenForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
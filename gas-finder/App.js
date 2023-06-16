
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import React from 'react'

import { Home } from './Views/Home'
//import { About } from './Views/About'
//import { Easy } from './Views/Easy'
//import { Good } from './Views/Good'
//import { Expert } from './Views/Expert'

const Stack = createNativeStackNavigator()

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animation: 'slide_from_right',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App












/* 
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */
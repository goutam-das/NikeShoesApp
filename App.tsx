import React from 'react';
import {
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// Screen
import { Home } from '@screens';
import { icons, COLORS, FONTS, SIZES } from '@constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "SHOE SELECTOR",
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle,
              alignSelf: "center"
            },
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={onPress}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log("header right")}
              >
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30
                  }}
                />
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
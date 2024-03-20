import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

import EditScreen from './src/screens/EditScreen';
import { ThemeContextProvider } from './src/context/themeContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeContextProvider>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index" className="dark">
            <Stack.Screen
              name="Index"
              options={{
                title: 'Blogs',
              }}
              component={IndexScreen}
            />
            <Stack.Screen
              name="Show"
              options={{ title: 'Show Blog' }}
              component={ShowScreen}
            />
            <Stack.Screen
              name="Create"
              options={{
                title: 'Create Blog',
              }}
              component={CreateScreen}
            />
            <Stack.Screen
              name="Edit"
              options={{
                title: 'Edit Blog',
              }}
              component={EditScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeContextProvider>
  );
}

// {
//   "build": {
//     "preview": {
//       "android": {
//         "buildType": "apk"
//       }
//     },
//     "preview2": {
//       "android": {
//         "gradleCommand": ":app:assembleRelease"
//       }
//     },
//     "preview3": {
//       "developmentClient": true
//     },
//     "preview4": {
//       "distribution": "internal"
//     },
//     "production": {}
//   }
// }

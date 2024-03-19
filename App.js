import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index" className="dark">
          <Stack.Screen
            name="Index"
            options={{
              title: 'Blogs',
              // headerRight: (props) => (
              //   <TouchableOpacity onPress={() => console.log(props)}>
              //     <Feather size={30} name="plus" />
              //   </TouchableOpacity>
              // ),
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
  );
}

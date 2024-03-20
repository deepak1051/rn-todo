import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useContext, useEffect } from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { themeContext } from '../context/themeContext';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
  const { colorScheme, toggleColorScheme } = useContext(themeContext);

  console.log(colorScheme);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather size={30} name="plus" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // useEffect(() => {
  //   getBlogPosts();
  // }, []);

  return (
    <View className="flex-1  dark:bg-gray-900 bg-gray-900">
      <FlatList
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              className=""
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View className=" px-2 mt-2 flex flex-row justify-between py-6 dark:bg-gray-200 bg-gray-400 mx-4 rounded-md ">
                <Text className="dark:text-pink-700 font-light text-xl">
                  {item.title}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <Text className="text-center text-lg dark:bg-pink-700">Toggle Theme</Text>
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
    </View>
  );
};

IndexScreen.navigationOptions = () => {
  return {
    headerRight: <Feather name="plus" size={30} />,
  };
};

export default IndexScreen;

const styles = StyleSheet.create({});

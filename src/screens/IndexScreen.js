import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useContext, useEffect } from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { styled, useColorScheme } from 'nativewind';

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather size={30} name="plus" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const StyledPressable = styled(Pressable);
  const StyledText = styled(Text);

  return (
    <View className="flex-1  dark:bg-slate-800">
      {/* <Button title="Add Post" onPress={addBlogPost} /> */}
      <FlatList
        data={state}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View className="px-2 mt-2 flex flex-row justify-between py-5 border border-gray-500">
                <Text className="text-xl">{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {/* <Text
        onPress={() =>
          setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
        }
      >
        {`The color scheme is ${colorScheme}`}
      </Text> */}

      {/* <StyledPressable
        onPress={() =>
          setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
        }
        className="flex-1 items-center justify-center dark:bg-slate-800"
      >
        <StyledText selectable={false} className="dark:text-white">
          {`Try clicking me! ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
        </StyledText>
      </StyledPressable> */}
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

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

const BlogPostForm = ({
  onSubmit,
  initialValues = { title: '', content: '' },
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  console.log(initialValues);

  return (
    <View className="mx-2">
      <Text className="text-thin text-base mb-1">Enter Title:</Text>
      <TextInput
        className="text-[18px] border border-gray-400  mb-3 p-2 rounded"
        value={title}
        onChangeText={(text) => setTitle(text)}
        autoFocus
      />

      <Text className="text-thin text-base mb-1">Enter Content:</Text>
      <TextInput
        className="text-[18px]  mb-3 p-2 rounded  border"
        value={content}
        onChangeText={(text) => setContent(text)}
        // multiline={true}
        // numberOfLines={4}
      />

      <Button onPress={() => onSubmit(title, content)} title="Save Blog Post" />
    </View>
  );
};

export default BlogPostForm;

const styles = StyleSheet.create({});

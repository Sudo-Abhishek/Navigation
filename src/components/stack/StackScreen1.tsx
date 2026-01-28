import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { StackParamsList } from './StackNavigationDemo';

export type StackScreen1NavigationProp = StackNavigationProp<
  StackParamsList,
  'StackScreen1'
>;
export default function StackScreen1() {
  const navigation = useNavigation<StackScreen1NavigationProp>();
  return (
    <View>
      <Text>Stack Screen 1</Text>
      <Button
        onPress={() => navigation.navigate('StackScreen2', { itemId: 10 })}
        title="Go to stack screen 2"
      />
    </View>
  );
}

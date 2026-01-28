import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { StackParamsList } from './StackNavigationDemo';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export type StackScreen2NavigationProp = StackScreenProps<
  StackParamsList,
  'StackScreen2'
>;
type StackScreen2RouteProp = RouteProp<StackParamsList, 'StackScreen2'>;
export default function StackScreen2() {
  const navigation = useNavigation<StackScreen2NavigationProp>();
  const route = useRoute<StackScreen2RouteProp>();

  return (
    <View>
      <Text>Stack Screen 2</Text>
      <Text>item id is : {route.params.itemId}</Text>
      <Button
        title="Go back to stack screen 1"
        onPress={() => navigation?.goBack()}
      />
    </View>
  );
}

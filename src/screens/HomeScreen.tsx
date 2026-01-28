import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamsList } from '../RootNavigator';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;
export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('StackDemo')}
        title="Stack Navigation Demo"
      />
      <Button
        onPress={() => navigation.navigate('TabDemo')}
        title="Tab Navigation Demo"
      />
      <Button
        onPress={() => navigation.navigate('DrawerDemo')}
        title="Drawer Navigation Demo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

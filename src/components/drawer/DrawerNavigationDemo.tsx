import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';

type DrawerParamsList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};

type DrawerScreen1Props = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'DrawerScreen1'>;
};
type DrawerScreen2Props = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'DrawerScreen2'>;
};
const Drawer = createDrawerNavigator<DrawerParamsList>();

function DrawerScreen1({ navigation }: DrawerScreen1Props) {
  return (
    <View>
      <Text>Drawer screen 1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
function DrawerScreen2({ navigation }: DrawerScreen2Props) {
  return (
    <View>
      <Text>Drawer screen 2</Text>
    </View>
  );
}

export default function DrawerNavigationDemo() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
}

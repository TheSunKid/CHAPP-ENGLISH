
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login/Login'
import Register from '../Register/DangKy_1'
import Register2 from '../Register/DangKy_2'
const RootStack = createStackNavigator(
    {
      Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            },
        },
        Register: {
            screen: Register,
            navigationOptions: {
                header: null,
            },
        },
        Register2: {
            screen: Register2,
            navigationOptions: {
                header: null,
            }
        },
    },
    {
        headerMode: "float",
    }
);

export default RootStack;

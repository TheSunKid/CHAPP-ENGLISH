import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import FirstMenu from './src/component/FirstMenu';
import DangKy_1 from './src/component/Register/DangKy_1';
import DangKy_2 from './src/component/Register/DangKy_2';
import Option from './src/component/Option';
import DangNhap from './src/component/DangNhap';
import UngDung from './src/component/UngDung';
import KinderGaten from './src/component/KinderGaten';
import Channel from './src/component/Channel';
import Course from './src/component/Course';
import Acc from './src/component/Acc';
import SplashScreen from './src/component/Splash';
import PreSchool from './src/component/PreSchool/PreSchool';
import PreSchoolNav from './src/component/PreSchool/PreSchoolNav';
import GridKinder from './src/component/GridKinder';
import TableAcc from './src/component/TableAcc';
import Naptien from './src/component/Money/Naptien';
import Ruttien from './src/component/Money/Ruttien';
import Team from './src/component/PreSchool/Team';
import Stems from './src/component/PreSchool/Stems';
import Phonic from './src/component/PreSchool/Phonic';
import YLE from './src/component/PreSchool/YLE';
import BotttomNav from './src/component/PreSchool/BotttomNav';
import ForgotPassword from './src/component/ForgotPassword/ForgotPassword';
import CambridgeYLE_Course from './src/component/Course/ForCourse/CambridgeYLE_Course';
import CourseMainMenu from './src/component/Course/ForCourse/CourseMainMenu';
import CourseNav from './src/component/Course/ForCourse/CourseNav';
import KinderGaten_Course from './src/component/Course/ForCourse/KinderGaten_Course';
import Pre_School_Couse from './src/component/Course/ForCourse/Pre_School_Couse';
import ComboKinder from './src/component/Course/ComboVoucher/ComboKinder';
import ComboPre from './src/component/Course/ComboVoucher/ComboPre';
import ComboCambridge from './src/component/Course/ComboVoucher/ComboCambridge';
import ForProduct from './src/component/Course/ForProduct/ForProduct';
import Product_Pre_School from './src/component/Course/ForProduct/Product_Pre_School/Product_Pre_School';
import List_Product_PreSchool from './src/component/Course/ForProduct/Product_Pre_School/List_Product_PreSchool';
import Product_Kinder from './src/component/Course/ForProduct/Product_Kinder/Product_Kinder';
import Product_Cambridge from './src/component/Course/ForProduct/Product_Cambridge/Product_Cambridge';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen
          name='Splash'
          component={SplashScreen}
          options={{ title: 'Splash' }}
        />
      <Stack.Screen
          name='Product_Cambridge'
          component={Product_Cambridge}
      />
      <Stack.Screen
          name='Product_Kinder'
          component={Product_Kinder}
      />
      <Stack.Screen
          name='Product_Pre_School'
          component={Product_Pre_School}
      />
       
        <Stack.Screen
          name='FirstMenu'
          component={FirstMenu}
          options={{ title: 'First' }}
        />

        <Stack.Screen
          name='DangKy_1'
          component={DangKy_1}
          options={{ title: 'Dang Ky 1' }} />
        <Stack.Screen
          name='DangNhap'
          component={DangNhap}
          options={{ title: 'Dang Nhap' }} />

        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={{ title: 'Quên mật khẩu' }} />



        <Stack.Screen
          name='Option'
          component={Option}
          options={{ title: 'Option' }} />
        <Stack.Screen
          name='DangKy_2'
          component={DangKy_2}
          options={{ title: 'Dang ky 2' }} />
        <Stack.Screen
          name='UngDung'
          component={UngDung}
          options={{ title: 'Ứng dụng' }} />
        <Stack.Screen
          name='KinderGaten'
          component={KinderGaten}
          options={{ title: 'KiderGatern' }} />
        <Stack.Screen
          name='Channel'
          component={Channel}
          options={{ title: 'Channel' }} />
        <Stack.Screen
          name='Course'
          component={Course}
          options={{ title: 'Course' }} />
        <Stack.Screen
          name='Acc'
          component={Acc}
          options={{ title: 'Acc' }} />

        <Stack.Screen
          name='GridKinder'
          component={GridKinder}
          options={{ title: 'GridKinder' }} />
        <Stack.Screen
          name='TableAcc'
          component={TableAcc}
          options={{ title: 'TableAcc' }} />
        <Stack.Screen
          name='PreSchoolNav'
          component={PreSchoolNav}
          options={{ title: 'PreSchoolNav' }} />
        <Stack.Screen
          name='PreSchool'
          component={PreSchool}
          options={{ title: 'PreSchool' }} />
        <Stack.Screen
          name='Ruttien'
          component={Ruttien}
          options={{ title: 'Rút tiền về tài khoản liên kết' }}
        />
        <Stack.Screen
          name='Naptien'
          component={Naptien}
          options={{ title: 'Nạp tiền ví hoa hồng' }}
        />
        <Stack.Screen
          name='Team'
          component={Team}

        />
        <Stack.Screen
          name='Stems'
          component={Stems}

        />
        <Stack.Screen
          name='Phonic'
          component={Phonic}

        />
        <Stack.Screen
          name='YLE'
          component={YLE}
        />
        <Stack.Screen
          name='BotttomNav'
          component={BotttomNav}

        />
        <Stack.Screen
          name='CambridgeYLE_Course'
          component={CambridgeYLE_Course}

        />
        <Stack.Screen
          name='CourseMainMenu'
          component={CourseMainMenu}

        />
        <Stack.Screen
          name='CourseNav'
          component={CourseNav}

        />
        <Stack.Screen
          name='KinderGaten_Course'
          component={KinderGaten_Course}

        />
        <Stack.Screen
          name='Pre_School_Couse'
          component={Pre_School_Couse}

        />
        <Stack.Screen
          name='ComboKinder'
          component={ComboKinder}

        />
        <Stack.Screen
          name='ComboPre'
          component={ComboPre}

        />
        <Stack.Screen
          name='ComboCambridge'
          component={ComboCambridge}

        />
        <Stack.Screen
          name='ForProduct'
          component={ForProduct}
          options={{ title: 'For Products' }} />
        <Stack.Screen
          name='List_Product_PreSchool'
          component={List_Product_PreSchool}

        />
      </Stack.Navigator>

    </NavigationContainer>


  )
}


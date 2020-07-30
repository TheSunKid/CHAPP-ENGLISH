import React from "react";
import {
   createBottomTabNavigator,
   createAppContainer
} from "react-navigation";

import UngDung from '../component/UngDung';
import DangNhap from '../component/DangNhap';

const Tabbar = createBottomTabNavigator(
   {
      UngDung: {
         screen: UngDung
      },
      DangNhap: {
         screen: DangNhap
      }
   }
);
const BottomNav = createAppContainer(Tabbar);
export default BottomNav;
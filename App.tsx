import React from 'react';
import Apploading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import Welcome from './src/screens/Welcome';
import { UserIdentification } from './src/screens/UserIdentification';
import { Login } from './src/screens/Login'
import { PacienteHospital } from './src/screens/PacienteHospital'
import { CamApp } from './src/screens/CamApp'
import { Qr } from './src/screens/Qr'
import {LoginUser} from './src/screens/LoginUser'

import Dash, { DashboardUser } from './src/screens/DashboardUser'

import { UserData } from './src/screens/UserData';


const stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <Apploading />
  return (
    <NavigationContainer>
      <stack.Navigator headerMode="none" screenOptions={{ cardStyle: { backgroundColor: '#FFF' } }}>
      
     
      <stack.Screen name="Login" component={Login} />

      </stack.Navigator>
    </NavigationContainer>

  );
}



/*
 <stack.Screen name="Login" component={Login} />
        <stack.Screen name="PacienteHospital" component={PacienteHospital} />
           <stack.Screen name="UserIdentification" component={UserIdentification} />

  <stack.Screen name="Welcome" component={Welcome} />

        <stack.Screen name="UserData" component={UserData} />

         <stack.Screen name="CamApp" component={CamApp} />

        <stack.Screen name="Dash" component={Dash} />
        <stack.Screen name="Qr" component={Qr} />


         <stack.Screen name="Welcome" component={Welcome} />
    
      <stack.Screen name="PacienteHospital" component={PacienteHospital} />
       <stack.Screen name="LoginUser" component={LoginUser} />


*/
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meal from './pages/Meals';
import Detail from './pages/Detail';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            title: 'Menu',
            headerStyle: {backgroundColor: '#ECECEC'},
            headerTitleStyle: {color: 'orange'},
          }}
        />
        <Stack.Screen
          name="MealPage"
          component={Meal}
          options={{
            title: 'Meals',
            headerStyle: {backgroundColor: '#ECECEC'},
            headerTitleStyle: {color: 'orange'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Yemek',
            headerStyle: {backgroundColor: '#ECECEC'},
            headerTitleStyle: {color: 'orange'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

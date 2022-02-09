import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Eventos from '../screens/Eventos'
import NovoEvento from '../screens/NovoEvento'
import Perfil from '../screens/Perfil'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        screenOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: { fontSize: 30 }
        }}
        >
        <Tab.Screen name="Eventos" component={Eventos}/>
        <Tab.Screen name="Novo Evento" component={NovoEvento}/>
        <Tab.Screen name="Meu Perfil" component={Perfil}/>
    </Tab.Navigator>
)
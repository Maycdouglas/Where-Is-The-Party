import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tab from './Tab'


export default props => (
    <View style={{flex: 1}}>
        <NavigationContainer>
            <Tab/>
        </NavigationContainer>
    </View>
)
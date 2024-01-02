import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import TabIcon from "./component/TabIcon";

const Tab = createBottomTabNavigator();

const BottomTabNavigator : React.FC = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => <TabIcon name="home" size={size} color={color}/>,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({color, size}) => <TabIcon name="cog" size={size} color={color}/>,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
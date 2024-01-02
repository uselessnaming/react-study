import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface TabIconProps{
    name: string;
    size: number;
    color: string;
}

const TabIcon: React.FC<TabIconProps> = ({name, size, color}) => {
    return <Icon name={name} size={size} color={color}/>
};

export default TabIcon
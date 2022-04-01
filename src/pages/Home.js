import React from 'react';
import Base3dComponent from '../robotComponents/reality_env';
import ConfigRobotComponent from '../robotComponents/robot_config';
import MyGuiComponent from '../robotComponents/gui_robot';

export default function Home() {
    return(
        <div>
            <ConfigRobotComponent />
            <Base3dComponent />
        </div>
  
    )
}
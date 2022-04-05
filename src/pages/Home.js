import React from 'react';
import Base3dComponent from '../robotComponents/reality_env';
import ConfigRobotComponent from '../robotComponents/robot_config';


export default function Home() {
    return(
        <div>
            <ConfigRobotComponent />
            <Base3dComponent />
        </div>
  
    )
}
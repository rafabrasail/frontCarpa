import React from 'react';
import Base3dComponent from '../robotComponents/reality_env';
import ConfigRobotComponent, {joints} from '../robotComponents/robot_config';


export default function Home() {
    // console.log(joints)
    return(
        <div>
            <ConfigRobotComponent />
            <Base3dComponent />
        </div>
  
    )
}
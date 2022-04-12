import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {server} from '../common';
import Base3dComponent from '../robotComponents/reality_env';
import ConfigRobotComponent from '../robotComponents/robot_config';


export default function Home() {

    const [robots,setRobots] = useState([]);
    const [param, setParam] = useState('default');
    const [joints, setJoints] = useState([])


    useEffect(() => {
      async function getRobots(){
        try {
          const response = await axios.get(`${server}/Robot/`)
          setRobots(response.data)
        } catch(error) {
          console.error(error)
        }
      }
      getRobots()
    }, [])  

    

    useEffect(() => {
      // console.log(param)
      let j
      if (param == 'default') {
        j = []
      } else {
        j = robots[(param)-1].joints
      };

      async function getJoints(urls){
        // console.log(urls)
        const res = await Promise.all(urls.map(u => fetch(u)))
        const jsons = await Promise.all(res.map(r => r.json()))
        // console.log(jsons)
        setJoints(jsons)
      }
      getJoints(j)
      
    }, [param])

    return(
        <div>
            <ConfigRobotComponent 
                // setParam={setParam} 
                // param={param}
                changeParam={param => setParam(param)}
                param={param}
                apis={robots} 
                joints={joints}
            />
            <Base3dComponent />
        </div>
  
    )
}
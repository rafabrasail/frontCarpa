import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../index.css';
import {server} from '../common';


export default function ConfigRobotComponent() {
    const [apis,setApis] = useState([]);
    const [param, setParam] = useState('default');
    const [toggleTabState, setToggleTabState] = useState(1);
    const [joints, setJoints] = useState([])

    const toggleTab = (index) => {
      setToggleTabState(index);
    }

    useEffect(() => {
      async function getRobots(){
        try {
          const response = await axios.get(`${server}/Robot/`)
          setApis(response.data)
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
        j = apis[(param)-1].joints
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
    <div className="container">
      <div className="columns">
        <div className="column is-one-quarter">

          <fieldset className="fieldset">
            <legend>Robot</legend>
              <div className="select">
                <select onChange={e => setParam(e.target.value)}>
                  <option value='default'>Select robot</option>
                  {apis.map((api, key) => (
                    <option key={api.id} value={api.id}>{api.name}</option>
                  ))}      
                </select>
              </div>

          </fieldset>

        </div>
        <div className="column">
       
          <fieldset className="fieldset">
            <legend>Robot Configuration: {param === "default" ? 'Choose robot' : `${apis[parseInt(param)-1].name}`} </legend>

              <div className="tabs is-centered">
                <ul>
                  <li 
                    className={toggleTabState === 1 ? "tablinks is-active" : "tablinks"}
                    onClick={() => toggleTab(1)}
                  >
                    <a>Screw Theory</a>
                  </li>
                  <li 
                    className={toggleTabState === 2 ? "tablinks is-active" : "tablinks"}
                    onClick={() => toggleTab(2)}
                  >
                    <a>Denavit Hartenberg</a>
                  </li>
                </ul>
              </div>  
              
              <div className={toggleTabState === 1 ? "tabcontent active-content" : "tabcontent"}>
                <h3>{param === "default" ? 
                              'Screw Theory Configuration' : 
                              `${apis[parseInt(param)-1].name} Screw Theory Configuration`}
                </h3>
            
                {param === "default" ?
                      <table>
                        <tbody>
                          {/* header */}
                          <tr>
                            <th rowSpan={2}>Joint</th>
                            <th colSpan={3}>S</th>
                            <th colSpan={3}>S0</th>
                            <th rowSpan={2}>t</th>
                            <th rowSpan={2}>theta</th>
                          </tr>                          
                          <tr>
                            <th>Sx</th>
                            <th>Sy</th>
                            <th>Sz</th>
                            <th>S0x</th>
                            <th>S0y</th>
                            <th>S0z</th>
                          </tr>
                          {/* body */}
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td> 
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>       
                          </tr>
                        </tbody>
                      </table>                          
                :
                      <table>
                        <tbody>
                          {/* header */}
                          <tr>
                            <th rowSpan={2}>Joint</th>
                            <th colSpan={3}>S</th>
                            <th colSpan={3}>S0</th>
                            <th rowSpan={2}>t</th>
                            <th rowSpan={2}>theta</th>
                          </tr>                          
                          <tr>
                            <th>Sx</th>
                            <th>Sy</th>
                            <th>Sz</th>
                            <th>S0x</th>
                            <th>S0y</th>
                            <th>S0z</th>
                          </tr>
                          {/* body */}
                          {joints.map((joint,key) => (
                            <tr key={joint.id}>
                              <td>{joint.name}</td>
                              <td>{joint.screw_s_x}</td>
                              <td>{joint.screw_s_y}</td>
                              <td>{joint.screw_s_z}</td>
                              <td>{joint.screw_s0_x}</td>
                              <td>{joint.screw_s0_y}</td>
                              <td>{joint.screw_s0_z}</td>
                              <td>{joint.screw_t}</td>
                              <td>{joint.screw_theta}</td>                              
                            </tr>
                          ))}                       
                        </tbody>
                      </table>  
                    }
                </div>
                <div className={toggleTabState === 2 ? "tabcontent active-content" : "tabcontent"}>
                  <h3>{param === "default" ? 
                                'Screw Theory Configuration' : 
                                `${apis[parseInt(param)-1].name} Denavit Hartenberg Configuration`}
                  </h3>  

                  {param === "default" ?  
                    <table>
                      <tbody>
                        {/* header */}                     
                        <tr>
                          <th>Joint</th>
                          <th>a</th>
                          <th>d</th>
                          <th>alpha</th>
                          <th>theta</th>
                        </tr>
                        {/* body */}
                        <tr>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>                  
                  :  
                    <table>
                      <tbody>
                        {/* header */}                     
                        <tr>
                          <th>Joint</th>
                          <th>a</th>
                          <th>d</th>
                          <th>alpha</th>
                          <th>theta</th>
                        </tr>
                        {/* body */}
                        {joints.map((joint,key) => (
                          <tr key={joint.id}>
                            <td>{joint.name}</td>
                            <td>{joint.denavit_a}</td>
                            <td>{joint.denavit_d}</td>
                            <td>{joint.denavit_alpha}</td>
                            <td>{joint.denavit_theta}</td>                             
                          </tr>
                        ))}     
                      </tbody>
                    </table>
                  }
                </div>

          </fieldset>
      
        </div>
      </div>

    </div> //</container>     
    )
};

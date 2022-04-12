import React, {useState, useEffect} from 'react';
import '../index.css';


export default function ConfigRobotComponent(props) {

    const [toggleTabState, setToggleTabState] = useState(1);
    // const [param, setParam] = useState('default');

    const toggleTab = (index) => {
      setToggleTabState(index);
    }

    return(
    <div className="container">
      <div className="columns">
        <div className="column is-one-quarter">

          <fieldset className="fieldset">
            <legend>Robot</legend>
              <div className="select">
                <select onChange={e => props.changeParam(e.target.value)}>
                  <option value='default'>Select robot</option>
                  {props.apis.map((api, key) => (
                    <option key={api.id} value={api.id}>{api.name}</option>
                  ))}      
                </select>
              </div>

          </fieldset>

        </div>
         <div className="column">
       
          <fieldset className="fieldset">
            <legend>Robot Configuration: {props.param === "default" ? 'Choose robot' : `${props.apis[parseInt(props.param)-1].name}`} </legend>

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
                <h3>{props.param === "default" ? 
                              'Screw Theory Configuration' : 
                              `${props.apis[parseInt(props.param)-1].name} Screw Theory Configuration`}
                </h3>
            
                {props.param === "default" ?
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
                          {props.joints.map((joint,key) => (
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
                  <h3>{props.param === "default" ? 
                                'Screw Theory Configuration' : 
                                `${props.apis[parseInt(props.param)-1].name} Denavit Hartenberg Configuration`}
                  </h3>  

                  {props.param === "default" ?  
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
                        {props.joints.map((joint,key) => (
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

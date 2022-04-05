import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../index.css';
import {server, robots, joints, points} from '../common';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faImage, faMusic, faFilm, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import JuntaComponent from './JuntaComponent';



export default function ConfigRobotComponent() {

    const [apis,setApis] = useState([]);
    const [param, setParam] = useState('default');


    useEffect(() => {
      async function getRobots(){
        try {
          const response = await axios.get(`${server}/Robot/`)
          setApis(response.data)
          console.log(response.data)
        } catch(error) {
          console.error(error)
        }
      }
      getRobots()
    }, [])  


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
            <p>Teste para ver se consigo</p>
          </fieldset>
      
        </div>
      </div>




      <h1><b>Statico</b></h1>
      {robots.map((robot) => (
        <h1 key={robot.id}>{robot.id}: {robot.name}</h1>
      ))}
      <h1><b>From Api</b></h1>
      {apis.map((api) => (
        <h1 key={api.id}>{api.id}: {api.name}</h1>
      ))}      



    </div> //</container>     
    )
};
     
        //   <Column.Group>
        //     <Column>
        //         <Card>
        //             <Card.Content>
        //                 <Title subtitle>
        //                     Helicoide
        //                 </Title>

        //                 <JuntaComponent robot={robotChoice}/>

        //             </Card.Content>
        //         </Card>
        //     </Column>
        //     <Column>

        //       <Card>
        //         <Card.Content>
        //           <Title subtitle>
        //             Denavit
        //           </Title>

        //       <Field horizontal>
        //         <Field.Label size="normal">
        //           <Label>Junta #1</Label>
        //         </Field.Label>
        //         <Field.Body>

        //           <Field>
        //             <Label>alpha</Label>
        //             <Control>
        //               <Input type="text" placeholder="alpha" />
        //             </Control>
        //           </Field>

        //           <Field>
        //             <Label>a</Label>
        //             <Control>
        //               <Input type="text" placeholder="a" />
        //             </Control>
        //           </Field>    

        //           <Field>
        //             <Label>d</Label>
        //             <Control>
        //               <Input type="text" placeholder="d" />
        //             </Control>
        //           </Field>    

        //           <Field>
        //             <Label>theta</Label>
        //             <Control>
        //               <Input type="text" placeholder="theta" />
        //             </Control>
        //           </Field>        

        //         </Field.Body>
        //       </Field>

        //         </Card.Content>
        //       </Card>

        //     </Column>
        //   </Column.Group>

        // </Container>

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {server, robots, joints, points} from '../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faMusic, faFilm, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import JuntaComponent from './JuntaComponent';

export default function ConfigRobotComponent() {

  const [apis,setApis] = useState([]);

// async function getRobots(){
//     return axios
//         .get(`${server}/Robot/`)
//         .then(res => res.data);
// }

//   async function fetchRobots() {
//     await getRobots().then(setApis)
//   }

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

  // useEffect(() => {
  //   console.log('renderizou')
  //   fetchRobots()
  // }, [])


    return(
    <div className="container">
      <h1><b>Statico</b></h1>
      {robots.map((robot) => (
        <h1 key={robot.id}>{robot.id}: {robot.name}</h1>
      ))}
      <h1><b>From Api</b></h1>
      {apis.map((api) => (
        <h1 key={api.id}>{api.id}: {api.name}</h1>
      ))}      

    </div> //</container>     

        // <Container>     

        //   {/* Radio buttom for choose the robot */}
        //   <Control style={{padding: 20}}>
        //     {radioButtonRobot.map((robot, key) => {
        //       return(
        //           <Label key={key}>
        //               <Radio 
        //                 name="robot" 
        //                 value={robot.id}
        //                 onChange={e => setRobotChoice(e.target.value)} /> {robot.name}
        //           </Label>
        //       )
        //     })}
        //   </Control>

        //   <h1>{robotChoice}</h1>
     
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
    )
};
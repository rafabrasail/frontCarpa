import React, {useState, useEffect} from 'react';
import ConfigRobotComponent from './robot_config';
// import { Container, Control, Label, Radio, Column, Card, Title, Field, Checkbox, Input } from 'rbx';
// import { Control, Field, Input, Label } from 'rbx';
import axios from "axios"
import ConfigRobotComponent from "./robot_config";

    // const EffectCheck = ({value}) => {
    //     console.log('component trigger', value);
    //     useEffect(() => {
    //         console.log('Updated Effect', value);
    //     },[value])
    // }


    // useEffect(() => {
    // axios.get("http://127.0.0.1:8000/Robot/")
    // .then((response) => {
    //     console.log(props.robot)
    //     // setRadioButtonRobot(response.data)
    //     console.log(response.data)
    //     // console.log(response.data.joints)

    // })
    // .catch(() => {
    //     console.log('Deu errado')
    // })
    // }, [])


export default function JuntaComponent(props) {

    console.log(joints)


    // state = {
    //     robot: null
    // };

    // async componentDidMount(){
    //         const url = 'http://127.0.0.1:8000/Robot/1/';
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         this.setState({robot: data.name})
    //         console.log(data);
    //         console.log(data.name);
    //         console.log(data.joints);
    // };

    // async componentDidMount(){
    //     axios.get("http://127.0.0.1:8000/Robot/"+ this.props.robot)
    //     .then((response) => {
    //         console.log('JuntaComponent')
    //         console.log(response.data)
    //     })
    //     .catch(() => {
    //         console.log('Deu errado')
    //     })        
    // }

    





    return(
        // <EffectCheck value={props.robot}/>
        <h1>junta comp</h1>
        // <Field horizontal>
        // <Field.Label size="normal">
        //     <Label>{props.robot}</Label>
        // </Field.Label>
        // <Field.Body>

        //     <Field>
        //     <Label>S0x</Label>
        //     <Control>
        //         <Input type="text" placeholder="S0x" />
        //     </Control>
        //     </Field>

        //     <Field>
        //     <Label>S0y</Label>
        //     <Control>
        //         <Input type="text" placeholder="S0y" />
        //     </Control>
        //     </Field>    

        //     <Field>
        //     <Label>S0z</Label>
        //     <Control>
        //         <Input type="text" placeholder="S0z" />
        //     </Control>
        //     </Field>    

        //     <Field>
        //     <Label>Sx</Label>
        //     <Control>
        //         <Input type="text" placeholder="Sx" />
        //     </Control>
        //     </Field>    

        //     <Field>
        //     <Label>Sy</Label>
        //     <Control>
        //         <Input type="text" placeholder="Sy" />
        //     </Control>
        //     </Field>    

        //     <Field>
        //     <Label>Sz</Label>
        //     <Control>
        //         <Input type="text" placeholder="Sz" />
        //     </Control>
        //     </Field>    

        //     <Field>
        //     <Label>t</Label>
        //     <Control>
        //         <Input type="text" placeholder="t" />
        //     </Control>
        //     </Field>    

        //     <Field>
        //     <Label>alpha</Label>
        //     <Control>
        //         <Input type="text" placeholder="alpha" />
        //     </Control>
        //     </Field>                        

        // </Field.Body>
        // </Field>
    )
};
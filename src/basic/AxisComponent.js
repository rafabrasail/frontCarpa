import React from "react";
import * as THREE from 'three'

export default class AxisComponent extends React.Component {

    render(){
        console.log(this.props.rotation)
        console.log(this.props.rotation[0])
        console.log(this.props.rotation[1])
        console.log(this.props.rotation[2])

        const roll = this.props.rotation[0]
        const pitch = this.props.rotation[1]
        const yaw = this.props.rotation[2]

        //vector of X rotation
        const a11 = Math.cos(yaw) * Math.cos(pitch)
        const a21 = Math.sin(yaw) * Math.cos(pitch)
        const a31 = -Math.sin(pitch)

        //vector of Y rotation
        const a12 = Math.cos(yaw) * Math.sin(pitch) * Math.sin(roll) - Math.sin(yaw) * Math.cos(roll) 
        const a22 = Math.sin(yaw) * Math.sin(pitch) * Math.sin(roll) + Math.cos(yaw) * Math.cos(roll) 
        const a32 = Math.cos(pitch) * Math.sin(roll)
        
        //vector of Z rotation
        const a13 = Math.cos(yaw) * Math.sin(pitch) * Math.cos(roll) + Math.sin(yaw) * Math.sin(roll)
        const a23 = Math.sin(yaw) * Math.sin(pitch) * Math.cos(roll) - Math.cos(yaw) * Math.sin(roll) 
        const a33 = Math.cos(pitch) * Math.cos(roll)        

        console.log(a11, a21, a31)
        console.log(a12, a22, a32)
        console.log(a13, a23, a33)
        const dirX = new THREE.Vector3(a11, a21, a31)
        dirX.normalize();
        console.log(dirX)
        const posX = new THREE.Vector3(this.props.position[0], this.props.position[1], this.props.position[2])

        const dirY = new THREE.Vector3(a12, a22, a32)
        dirY.normalize();
        const posY = new THREE.Vector3(this.props.position[0], this.props.position[1], this.props.position[2])

        const dirZ = new THREE.Vector3(a13, a23, a33)
        dirZ.normalize();
        const posZ = new THREE.Vector3(this.props.position[0], this.props.position[1], this.props.position[2])

        return (
            <mesh>
                <arrowHelper args={[ dirX, posX, 3, 0xff0000]} />
                <arrowHelper args={[ dirY, posY, 3, 0x00c244]} />
                <arrowHelper args={[ dirZ, posZ, 3, 0x0003c7]} />
            </mesh>  
        )
    }
};
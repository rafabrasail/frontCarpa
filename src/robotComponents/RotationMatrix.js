import React from "react";

export default function RotationMatrix(roll, pitch, yaw) {
    // Z-Y-Z fixed angles
    const a11 = Math.cos(yaw) * Math.cos(pitch)
    const a12 = Math.cos(yaw) * Math.sin(pitch) * Math.sin(roll) - Math.sin(yaw) * Math.cos(roll) 
    const a13 = Math.cos(yaw) * Math.sin(pitch) * Math.cos(roll) + Math.sin(yaw) * Math.sin(roll)

    const a21 = Math.sin(yaw) * Math.cos(pitch)
    const a22 = Math.sin(yaw) * Math.sin(pitch) * Math.sin(roll) + Math.cos(yaw) * Math.cos(roll) 
    const a23 = Math.sin(yaw) * Math.sin(pitch) * Math.cos(roll) - Math.cos(yaw) * Math.sin(roll) 

    const a31 = -Math.sin(pitch)
    const a32 = Math.cos(pitch) * Math.sin(roll)
    const a33 = Math.cos(pitch) * Math.cos(roll)
    // return(
        
    // )
}